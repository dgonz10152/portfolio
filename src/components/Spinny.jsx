import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

function SpinningIcosphere() {
	const meshRef = useRef();
	const [currentRotationSpeed, setCurrentRotationSpeed] = useState(0);
	const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
	const [opacity, setOpacity] = useState(0);
	const lastScrollPos = useRef(0);
	const lastTime = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentTime = Date.now();
			const deltaTime = currentTime - lastTime.current;
			const currentScrollPos = window.scrollY;
			const deltaScroll = Math.abs(currentScrollPos - lastScrollPos.current);

			// Check if the top of the screen is past the bottom of the About section
			const aboutSection = document.getElementById("About");

			if (aboutSection) {
				const aboutBottom = aboutSection.offsetTop + aboutSection.offsetHeight;
				const screenTop = currentScrollPos;

				// Only activate when the top of the screen is past the bottom of About section
				if (screenTop > aboutBottom) {
					// Calculate fade-in progress (0 to 1)
					const fadeDistance = 200; // pixels over which to fade in
					const fadeProgress = Math.min((screenTop - aboutBottom) / fadeDistance, 1);
					setOpacity(fadeProgress);

					if (deltaTime > 0) {
						const speed = deltaScroll / deltaTime; // pixels per millisecond
						// Add the new scroll speed to current rotation speed for inertia
						setCurrentRotationSpeed((prev) => prev + speed * 0.01);
					}
				} else {
					setOpacity(0);
					// Reset rotation speed when not visible
					setCurrentRotationSpeed(0);
				}
			}

			lastScrollPos.current = currentScrollPos;
			lastTime.current = currentTime;
		};

		const handleMouseMove = (event) => {
			if (opacity <= 0) return; // Only track mouse when visible

			// Convert screen coordinates to normalized coordinates (-1 to 1)
			const x = (event.clientX / window.innerWidth) * 2 - 1;
			const y = -(event.clientY / window.innerHeight) * 2 + 1;
			setTargetPosition({ x, y });
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, [opacity]);

	useFrame(() => {
		if (meshRef.current && opacity > 0) {
			// Apply rotation based on current rotation speed
			const rotationSpeed = Math.max(currentRotationSpeed * 0.07, 0.01); // Cap the rotation speed

			meshRef.current.rotation.x += rotationSpeed;
			meshRef.current.rotation.y += rotationSpeed * 0.7;
			meshRef.current.rotation.z += rotationSpeed * 0.3;

			// Smoothly move towards cursor position
			const currentX = meshRef.current.position.x;
			const currentY = meshRef.current.position.y;

			// Calculate distance to target
			const deltaX = targetPosition.x - currentX;
			const deltaY = targetPosition.y - currentY;

			// Move towards target with smooth interpolation
			meshRef.current.position.x += deltaX * 0.02;
			meshRef.current.position.y += deltaY * 0.02;

			// Apply inertia decay - gradually slow down over time
			setCurrentRotationSpeed((prev) => Math.max(prev * 0.99, 0.01));
		}
	});

	if (opacity <= 0) return null;

	return (
		<mesh ref={meshRef}>
			<icosahedronGeometry args={[0.3, 1]} />
			<meshStandardMaterial
				color="#ffffff"
				wireframe={true}
				transparent={true}
				opacity={opacity}
			/>
		</mesh>
	);
}

function Spinny() {
	return (
		<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
			<Canvas
				camera={{ position: [0, 0, 3], fov: 45 }}
				style={{ background: "transparent" }}
			>
				<ambientLight intensity={0.5} />
				<pointLight position={[10, 10, 10]} intensity={1} />
				<SpinningIcosphere />
			</Canvas>
		</div>
	);
}

export default Spinny;
