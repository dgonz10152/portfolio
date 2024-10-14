function MenuItem({ elementId, children }) {
	function scrollTo() {
		let element = document.getElementById(elementId);
		console.log(element);
		element.scrollIntoView({ behavior: "smooth", block: "start" });
	}
	return (
		<button
			onClick={scrollTo}
			className="m-0 p-2 px-10 text-xl text-slate-100 hover:text-2xl hover:text-indigo-900 duration-200 font-roboto blur-none"
		>
			{children}
		</button>
	);
}

function MenuBar() {
	return (
		<>
			<div className="sticky top-0 z-20 h-12 backdrop-blur-sm">
				<div className="flex justify-center">
					<div className="flex justify-center">
						<MenuItem elementId={"About"}>About</MenuItem>
						<MenuItem elementId={"Experience"}>Experience</MenuItem>
						<MenuItem elementId={"Projects"}>Projects</MenuItem>
					</div>
				</div>
			</div>
		</>
	);
}

export default MenuBar;
