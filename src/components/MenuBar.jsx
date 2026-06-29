function MenuItem({ elementId, children }) {
	function scrollTo() {
		let element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
	return (
		<button
			onClick={scrollTo}
			className="m-0 px-4 md:px-6 py-1.5 rounded-full text-lg text-slate-100 hover:text-indigo-300 duration-200 font-sans"
		>
			{children}
		</button>
	);
}

function MenuBar() {
	return (
		<>
			<div className="fixed inset-x-0 top-4 z-40 flex justify-center">
				<div className="flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md shadow-lg">
					<MenuItem elementId="Experience">Experience</MenuItem>
					<MenuItem elementId="Projects">Projects</MenuItem>
					<MenuItem elementId="Links">Links</MenuItem>
				</div>
			</div>
		</>
	);
}

export default MenuBar;
