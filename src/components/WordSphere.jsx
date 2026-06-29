import { useEffect, useRef, useState } from "react";

const blurb = "Hi! I'm Daniel Gonzalez, a dual Economics and Computer Science major who's been passionate about coding since age 7. My journey started with a Khan Academy JavaScript course, and since then I've explored everything from game development to machine learning to web apps. I love using computer science as a lens to understand and apply economic insights, building technology-driven solutions that make a real-world impact.";

const words = [
	...blurb.split(" "),
	...blurb.split(" "),
	...blurb.split(" "),
	...blurb.split(" ")
];

// Keywords to highlight in the website's indigo accent color
const highlightKeywords = [
	"daniel",
	"gonzalez",
	"economics",
	"computer",
	"science",
	"coding",
	"javascript",
	"game",
	"development",
	"machine",
	"learning",
	"web",
	"apps",
	"lens",
	"solutions",
	"impact"
];

function WordSphere() {
	const containerRef = useRef(null);
	const [radius, setRadius] = useState(220);
	const [isDragging, setIsDragging] = useState(false);
	const rotationRef = useRef({ x: 0, y: 0 });
	const dragSpeedRef = useRef({ x: 0, y: 0 });
	const previousMousePositionRef = useRef({ x: 0, y: 0 });
	const isDraggingRef = useRef(false);
	const wordPositions = useRef([]);

	// Helper to clean word for keyword checking
	const isHighlightedWord = (word) => {
		const clean = word.toLowerCase().replace(/[^a-z0-9]/g, "");
		return highlightKeywords.includes(clean);
	};

	useEffect(() => {
		const handleResize = () => {
			if (containerRef.current && containerRef.current.parentElement) {
				const width = containerRef.current.parentElement.clientWidth;
				// Responsively set radius based on parent container width
				const computedRadius = Math.max(120, width * 0.55);
				setRadius(computedRadius);
			}
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	// Distribute words uniformly over a 3D sphere when radius changes
	useEffect(() => {
		const N = words.length;
		wordPositions.current = words.map((word, i) => {
			// Fibonacci sphere algorithm
			const phi = Math.acos(-1 + (2 * i) / N);
			const theta = Math.sqrt(N * Math.PI) * phi;

			const x = radius * Math.sin(phi) * Math.cos(theta);
			const y = radius * Math.sin(phi) * Math.sin(theta);
			const z = radius * Math.cos(phi);

			return {
				text: word,
				x,
				y,
				z,
				isHighlighted: isHighlightedWord(word)
			};
		});
	}, [radius]);

	useEffect(() => {
		let animationFrameId;

		const update = () => {
			if (!containerRef.current) return;

			if (isDraggingRef.current) {
				// Drag speed is updated directly in mousemove handler
			} else {
				// Apply inertia decay to drag rotation speed
				dragSpeedRef.current.x *= 0.95;
				dragSpeedRef.current.y *= 0.95;

				// Add drag speed + slow idle rotation (constant 0.1deg per frame)
				rotationRef.current.x += dragSpeedRef.current.x + 0.1;
				rotationRef.current.y += dragSpeedRef.current.y + 0.1;
			}

			const rxRad = (rotationRef.current.x * Math.PI) / 180;
			const ryRad = (rotationRef.current.y * Math.PI) / 180;

			const childElements = containerRef.current.children;
			if (childElements.length === wordPositions.current.length) {
				for (let i = 0; i < childElements.length; i++) {
					const el = childElements[i];
					const pos = wordPositions.current[i];
					if (!pos) continue;

					// Compute rotated positions in 3D space
					// Y-rotation
					const x1 = pos.x * Math.cos(ryRad) + pos.z * Math.sin(ryRad);
					const z1 = -pos.x * Math.sin(ryRad) + pos.z * Math.cos(ryRad);
					// X-rotation
					const y2 = pos.y * Math.cos(rxRad) - z1 * Math.sin(rxRad);
					const z2 = pos.y * Math.sin(rxRad) + z1 * Math.cos(rxRad);

					// Scale, opacity, and blur based on Z-depth (z2)
					// z2 ranges from -radius to +radius
					const normalizedDepth = (z2 + radius) / (2 * radius); // 0 (back) to 1 (front)

					const opacity = 0.15 + 0.85 * normalizedDepth;
					const scale = 0.55 + 0.45 * normalizedDepth;
					const blur = (1 - normalizedDepth) * 2; // Up to 2px blur at the back

					// Apply 3D translation and depth rendering
					el.style.transform = `translate(-50%, -50%) translate3d(${x1}px, ${y2}px, ${z2}px) scale(${scale})`;
					el.style.opacity = opacity;
					el.style.filter = `blur(${blur}px)`;
					el.style.zIndex = Math.round(normalizedDepth * 100);
				}
			}

			animationFrameId = requestAnimationFrame(update);
		};

		animationFrameId = requestAnimationFrame(update);
		return () => cancelAnimationFrame(animationFrameId);
	}, [radius]);

	const handleGlobalMouseMove = (e) => {
		if (!isDraggingRef.current) return;

		const dx = e.clientX - previousMousePositionRef.current.x;
		const dy = e.clientY - previousMousePositionRef.current.y;

		// Update rotation angles directly
		rotationRef.current.y += dx * 0.25;
		rotationRef.current.x -= dy * 0.25;

		// Calculate drag speed for release inertia
		dragSpeedRef.current = {
			x: -dy * 0.25,
			y: dx * 0.25
		};

		previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
	};

	const handleGlobalMouseUp = () => {
		isDraggingRef.current = false;
		setIsDragging(false);

		window.removeEventListener("mousemove", handleGlobalMouseMove);
		window.removeEventListener("mouseup", handleGlobalMouseUp);
	};

	const handleMouseDown = (e) => {
		// Prevent text selection/drag behaviors
		e.preventDefault();
		isDraggingRef.current = true;
		setIsDragging(true);
		previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
		dragSpeedRef.current = { x: 0, y: 0 };

		window.addEventListener("mousemove", handleGlobalMouseMove);
		window.addEventListener("mouseup", handleGlobalMouseUp);
	};

	const mouseMoveRef = useRef();
	const mouseUpRef = useRef();
	mouseMoveRef.current = handleGlobalMouseMove;
	mouseUpRef.current = handleGlobalMouseUp;

	// Cleanup global listeners on unmount
	useEffect(() => {
		return () => {
			window.removeEventListener("mousemove", mouseMoveRef.current);
			window.removeEventListener("mouseup", mouseUpRef.current);
		};
	}, []);

	return (
		<div
			className={`relative flex items-center justify-center w-full h-full select-none ${
				isDragging ? "cursor-grabbing" : "cursor-grab"
			}`}
			onMouseDown={handleMouseDown}
		>
			<div
				ref={containerRef}
				className="relative w-0 h-0"
				style={{ transformStyle: "preserve-3d" }}
			>
				{wordPositions.current.map((pos, i) => (
					<span
						key={i}
						className="absolute origin-center text-center font-sans text-[10px] sm:text-xs md:text-sm whitespace-nowrap"
						style={{
							left: "50%",
							top: "50%",
							transformOrigin: "center center",
							transform: `translate(-50%, -50%) translate3d(${pos.x}px, ${pos.y}px, ${pos.z}px)`,
						}}
					>
						{/* Nested span delegates hover transitions cleanly */}
						<span
							className={`inline-block px-1 rounded transition-all duration-300 ${
								pos.isHighlighted
									? "text-indigo-400 font-semibold drop-shadow-[0_0_8px_rgba(129,140,248,0.5)] hover:text-white"
									: "text-neutral-400 hover:text-indigo-300"
							} hover:scale-125`}
						>
							{pos.text}
						</span>
					</span>
				))}
			</div>
		</div>
	);
}

export default WordSphere;
