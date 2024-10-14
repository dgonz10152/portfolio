import MenuBar from "./components/MenuBar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
	return (
		<>
			<div className="overflow-x-clip z-20 ">
				<div id="About" />
				<MenuBar />
				<About />
				<hr className="p-0 m-10 w-[95vw] h-1 mx-auto my-20 border-0 rounded bg-slate-700" />
				<div id="Experience" />
				<Experience />
				<div className="m-10" />

				<div id="Projects" />
				<Projects />
			</div>
		</>
	);
}

export default App;
