import { useEffect, useRef } from "react";

// Fixed full-viewport grid: ascii chars light up indigo where the cursor hovers, then fade out.
// ponytail: rAF decay loop only runs while any cell is lit; idle = no work.
const CELL = 20; // px per grid cell
const DECAY = 0.92; // per-frame alpha multiplier (lower = faster fade)
const INDIGO = "129,140,248"; // indigo-400
const CHARS = "01<>/{}[]*+#"; // pool of characters drawn at random

export default function PixelGrid() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		let cols = 0;
		let rows = 0;
		let alphas = new Float32Array(0); // per-cell opacity, 0 = off
		let chars = []; // per-cell character, picked when the cell lights up
		let raf = null;

		function resize() {
			const dpr = window.devicePixelRatio || 1;
			canvas.width = window.innerWidth * dpr;
			canvas.height = window.innerHeight * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.font = `${CELL}px monospace`;
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			cols = Math.ceil(window.innerWidth / CELL);
			rows = Math.ceil(window.innerHeight / CELL);
			alphas = new Float32Array(cols * rows); // all start off
			chars = new Array(cols * rows).fill("");
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
		}

		function frame() {
			ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
			let anyLit = false;
			for (let i = 0; i < alphas.length; i++) {
				let a = alphas[i];
				if (a <= 0.002) {
					alphas[i] = 0;
					continue;
				}
				const x = (i % cols) * CELL + CELL / 2;
				const y = Math.floor(i / cols) * CELL + CELL / 2;
				ctx.fillStyle = `rgba(${INDIGO},${a})`;
				ctx.fillText(chars[i], x, y);
				alphas[i] = a * DECAY;
				anyLit = true;
			}
			raf = anyLit ? requestAnimationFrame(frame) : null;
		}

		function light(e) {
			const col = Math.floor(e.clientX / CELL);
			const row = Math.floor(e.clientY / CELL);
			if (col < 0 || col >= cols || row < 0 || row >= rows) return;
			const i = row * cols + col;
			if (alphas[i] <= 0) chars[i] = CHARS[(Math.random() * CHARS.length) | 0];
			alphas[i] = 0.6;
			if (raf === null) raf = requestAnimationFrame(frame);
		}

		resize();
		window.addEventListener("resize", resize);
		window.addEventListener("pointermove", light);
		return () => {
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", light);
			if (raf !== null) cancelAnimationFrame(raf);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 -z-10 h-full w-full bg-slate-950"
		/>
	);
}
