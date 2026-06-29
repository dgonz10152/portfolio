import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Gradient-descent demo: indigo balls roll down a paraboloid bowl. Click the surface to drop one.
// ponytail: skipped the reference's flat field of gradient arrows; not needed for the effect.
const R = 4; // bowl half-width
const BOWL = 0.05; // gentle enclosing bowl so balls stay in frame
const N = 36; // grid divisions
const LR = 0.045; // descent learning rate
const SETTLED = 0.015; // gradient magnitude below which a ball has reached a local min
const MAX_POINTS = 1200; // trail cap per ball
const LINGER = 2; // seconds a ball stays at the bottom before fading out
const GROUND_Y = -0.5; // shift the whole bowl down so it frames better
const INDIGO = "#818cf8";

// Gaussian wells carve several local minima into a shallow bowl.
const WELLS = [
	{ x: -2.0, z: -1.4, d: 1.9, s: 1.3 },
	{ x: 2.1, z: 1.3, d: 2.6, s: 1.6 }, // deepest (global)
	{ x: -1.4, z: 2.1, d: 1.5, s: 1.1 },
	{ x: 1.6, z: -2.1, d: 1.8, s: 1.3 },
];

const f = (x, z) => {
	let y = BOWL * (x * x + z * z);
	for (const w of WELLS) {
		const r2 = (x - w.x) ** 2 + (z - w.z) ** 2;
		y -= w.d * Math.exp(-r2 / (2 * w.s * w.s));
	}
	return y;
};

// Analytic gradient (df/dx, df/dz)
const grad = (x, z) => {
	let gx = 2 * BOWL * x;
	let gz = 2 * BOWL * z;
	for (const w of WELLS) {
		const r2 = (x - w.x) ** 2 + (z - w.z) ** 2;
		const e = (w.d * Math.exp(-r2 / (2 * w.s * w.s))) / (w.s * w.s);
		gx += e * (x - w.x);
		gz += e * (z - w.z);
	}
	return [gx, gz];
};

// Clean square wireframe (rows + columns), no triangle diagonals.
function useBowlGeometry() {
	return useMemo(() => {
		const positions = [];
		const step = (2 * R) / N;
		const at = (i) => -R + i * step;
		for (let a = 0; a <= N; a++) {
			for (let b = 0; b < N; b++) {
				const x0 = at(b), x1 = at(b + 1), z = at(a);
				positions.push(x0, f(x0, z), z, x1, f(x1, z), z);
				const zc0 = at(b), zc1 = at(b + 1), x = at(a);
				positions.push(x, f(x, zc0), zc0, x, f(x, zc1), zc1);
			}
		}
		const geo = new THREE.BufferGeometry();
		geo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
		return geo;
	}, []);
}

// Solid paraboloid surface used only for click raycasting (rendered invisibly).
function useSurfaceGeometry() {
	return useMemo(() => {
		const g = new THREE.PlaneGeometry(2 * R, 2 * R, N, N);
		g.rotateX(-Math.PI / 2);
		const p = g.attributes.position;
		for (let i = 0; i < p.count; i++) {
			p.setY(i, f(p.getX(i), p.getZ(i)));
		}
		g.computeVertexNormals();
		return g;
	}, []);
}

function Ball({ start, onDone }) {
	const point = useRef();
	const group = useRef();
	const pos = useRef({ ...start });
	const reachedAt = useRef(null);

	const trail = useMemo(() => {
		const geo = new THREE.BufferGeometry();
		const arr = new Float32Array(MAX_POINTS * 3);
		geo.setAttribute("position", new THREE.BufferAttribute(arr, 3));
		geo.setDrawRange(0, 0);
		return { geo, arr, count: 0 };
	}, []);

	useFrame((state, dt) => {
		const p = pos.current;
		const k = Math.min(dt * 60, 2);
		const [gx, gz] = grad(p.x, p.z);
		p.x -= LR * gx * k;
		p.z -= LR * gz * k;
		const y = f(p.x, p.z);

		if (point.current) point.current.position.set(p.x, y + 0.12, p.z);

		if (trail.count < MAX_POINTS) {
			const i = trail.count * 3;
			trail.arr[i] = p.x;
			trail.arr[i + 1] = y + 0.05;
			trail.arr[i + 2] = p.z;
			trail.count += 1;
			trail.geo.setDrawRange(0, trail.count);
			trail.geo.attributes.position.needsUpdate = true;
		}

		// settled into a local min (gradient ~ 0): linger, then fade and remove
		if (gx * gx + gz * gz < SETTLED * SETTLED) {
			if (reachedAt.current === null) reachedAt.current = state.clock.elapsedTime;
			const elapsed = state.clock.elapsedTime - reachedAt.current;
			if (group.current) {
				group.current.children.forEach((c) => {
					if (c.material) c.material.opacity = Math.max(0, 1 - elapsed / LINGER);
				});
			}
			if (elapsed >= LINGER) onDone();
		}
	});

	return (
		<group ref={group}>
			<line geometry={trail.geo}>
				<lineBasicMaterial color={INDIGO} transparent opacity={0.9} />
			</line>
			<mesh ref={point}>
				<sphereGeometry args={[0.12, 16, 16]} />
				<meshBasicMaterial color={INDIGO} transparent opacity={1} />
			</mesh>
		</group>
	);
}

const rimStart = () => {
	const angle = Math.random() * Math.PI * 2;
	return { x: Math.cos(angle) * R * 0.95, z: Math.sin(angle) * R * 0.95 };
};

function Scene() {
	const group = useRef();
	const bowl = useBowlGeometry();
	const surface = useSurfaceGeometry();
	const { camera } = useThree();
	const nextId = useRef(0);
	const [balls, setBalls] = useState(() => [{ id: -1, start: rimStart() }]);

	// shallow top-down view (~32deg), pulled back so the whole surface fits in frame
	useEffect(() => {
		camera.position.set(0, GROUND_Y + 6.5, 10.5);
		camera.lookAt(0, GROUND_Y, 0);
	}, [camera]);

	// balls self-remove after their fade, so no hard cap needed (steady state stays small)
	const addBall = (start) =>
		setBalls((b) => [...b, { id: nextId.current++, start }]);

	// ambient spawns so the scene is never empty
	useEffect(() => {
		const t = setInterval(() => addBall(rimStart()), 3500);
		return () => clearInterval(t);
	}, []);

	useFrame((_, dt) => {
		if (group.current) group.current.rotation.y += dt * 0.15;
	});

	const handleClick = (e) => {
		e.stopPropagation();
		const local = e.object.worldToLocal(e.point.clone());
		addBall({ x: local.x, z: local.z });
	};

	return (
		<group ref={group} position={[0, GROUND_Y, 0]}>
			<lineSegments geometry={bowl}>
				<lineBasicMaterial color={INDIGO} transparent opacity={0.3} />
			</lineSegments>

			{/* invisible click target */}
			<mesh geometry={surface} onClick={handleClick}>
				<meshBasicMaterial colorWrite={false} depthWrite={false} />
			</mesh>

			{balls.map((b) => (
				<Ball
					key={b.id}
					start={b.start}
					onDone={() => setBalls((list) => list.filter((x) => x.id !== b.id))}
				/>
			))}
		</group>
	);
}

export default function GradientDescent() {
	return (
		<Canvas
			className="w-full h-full"
			camera={{ position: [0, 5, 0], fov: 45 }}
			dpr={[1, 2]}
		>
			<Scene />
		</Canvas>
	);
}
