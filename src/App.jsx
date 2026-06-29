import MenuBar from "./components/MenuBar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import PixelGrid from "./components/PixelGrid";

function App() {
	return (
		<>
			<PixelGrid />

			<div className="relative overflow-x-hidden">
				<div id="Hero" />
				<MenuBar />
				<Hero />
				<div id="About" />
				<About />
				<div id="Experience" />
				<Experience />
				<div id="Projects" />
				<Projects />
				<footer className="py-20 flex flex-col items-center justify-center border-t border-slate-900 bg-slate-950/80 relative z-20">
					<p className="text-sm text-neutral-500 font-sans select-none">
						&copy; {new Date().getFullYear()} Daniel Gonzalez. All rights reserved.
					</p>
				</footer>
			</div>
		</>
	);
}

export default App;
