import GradientDescent from "../components/GradientDescent";

function Hero() {
	return (
		<section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between py-12 px-6 md:px-20 overflow-hidden z-20">
			{/* Left/Middle Content Area */}
			<div className="flex-grow flex items-center justify-center">
				<div className="w-full max-w-4xl z-10 text-center">
					<h1 className="font-sans text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-100 tracking-tight select-none z-20">
						DanielGonzalez.dev
						<span className="inline-block w-[12px] sm:w-[18px] md:w-[24px] h-[0.8em] bg-neutral-100 ml-2 align-middle animate-blink" />
					</h1>
				</div>
			</div>

			{/* Background gradient-descent visualization */}
			<div className="absolute inset-x-0 bottom-0 top-24 z-0 flex items-center justify-center bg-[radial-gradient(circle_closest-side_at_center,rgba(56,189,248,0.14),transparent_70%)]">
				<div className="relative w-full h-full flex items-center justify-center">
					<GradientDescent />
				</div>
			</div>

		</section>
	);
}

export default Hero;
