import MenuBar from "./components/MenuBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Spinny from "./components/Spinny";
import Links from "./components/Links";
import PixelGrid from "./components/PixelGrid";

function App() {
	return (
		<>
			<Spinny />
			<PixelGrid />

			<div className="relative overflow-x-hidden">
				<div id="About" />
				<MenuBar />
				<About />
				<hr className="p-0 m-10 w-[95vw] h-1 mx-auto my-20 border-0 rounded bg-neutral-700" />
				<div id="Experience" />
				<Experience />
				<div id="Projects" />
				<Projects />
				<footer id="Links" className="py-20 flex flex-col items-center justify-center border-t border-slate-900 bg-slate-950/80 relative z-20">
					<Links className="mb-4" />
					<p className="text-sm text-neutral-500 font-sans select-none">
						&copy; {new Date().getFullYear()} Daniel Gonzalez. All rights reserved.
					</p>
				</footer>
			</div>
		</>
	);
}

export default App;
