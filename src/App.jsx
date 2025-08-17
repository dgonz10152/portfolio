import MenuBar from "./components/MenuBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Spinny from "./components/Spinny";

function App() {
	return (
		<>
			<Spinny />
			<div className="overflow-x-clip z-20 bg-slate-900">
				<div id="About" />
				<MenuBar />
				<About />
				<hr className="p-0 m-10 w-[95vw] h-1 mx-auto my-20 border-0 rounded bg-slate-700" />
				<div id="Experience" />
				<Experience />
				<div id="Projects" />
				<Projects />
			</div>
		</>
	);
}

export default App;
