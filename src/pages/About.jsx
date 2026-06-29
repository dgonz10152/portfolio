import { useEffect, useRef, useState } from "react";
import WordSphere from "../components/WordSphere";

function About() {
	const titleRef = useRef(null);
	const [titleWidth, setTitleWidth] = useState(0);

	// Track the rendered width of the title text so the sphere can size relative to it
	useEffect(() => {
		if (!titleRef.current) return;
		const observer = new ResizeObserver(([entry]) => {
			setTitleWidth(entry.contentRect.width);
		});
		observer.observe(titleRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between py-12 px-6 md:px-20 overflow-hidden z-20">
			{/* Left/Middle Content Area */}
			<div className="flex-grow flex items-center justify-center">
				<div className="w-full max-w-4xl z-10 text-center">
					<h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-100 tracking-tight select-none z-20">
						<span ref={titleRef} className="inline-block">DanielGonzalez.dev</span>
						<span className="inline-block w-[12px] sm:w-[18px] md:w-[24px] h-[0.8em] bg-neutral-100 ml-2 align-middle animate-blink" />
					</h1>
				</div>
			</div>

			{/* 3D Word Sphere Container on the Right */}
			<div className="absolute inset-x-0 bottom-0 top-24 z-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_60%)]">
				<div className="relative w-full h-[125%] flex items-center justify-center">
					<WordSphere diameter={titleWidth * 1.2} />
				</div>
			</div>

			{/* Bottom Slogan */}
			<div className="w-full text-center z-10 mt-8">
				<h2 className="font-sans text-lg sm:text-xl md:text-2xl text-neutral-300 tracking-wide select-none">
					Developing solutions to real world issues
				</h2>
			</div>
		</section>
	);
}

export default About;
