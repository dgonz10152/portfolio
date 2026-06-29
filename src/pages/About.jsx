import WordSphere from "../components/WordSphere";

function About() {
	return (
		<section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between py-12 px-6 md:px-20 overflow-hidden z-20">
			{/* Left/Middle Content Area */}
			<div className="flex-grow flex items-center">
				<div className="w-full max-w-4xl z-10">
					<h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-100 tracking-tight select-none z-20">
						DanielGonzalez.dev
						<span className="inline-block w-[12px] sm:w-[18px] md:w-[24px] h-[0.8em] bg-neutral-100 ml-2 align-middle animate-blink" />
					</h1>
				</div>
			</div>

			{/* 3D Word Sphere Container on the Right */}
			<div className="absolute right-0 md:right-[-5vw] top-1/2 -translate-y-1/2 translate-x-1/3 md:translate-x-0 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] md:w-[60vw] md:h-[60vw] z-0 flex items-center justify-center bg-[radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.25),transparent_60%)]">
				<div className="relative w-full h-full flex items-center justify-center">
					<WordSphere />
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
