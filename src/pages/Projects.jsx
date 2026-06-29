import projects from "../data/projects.json";

// Resolve a JSON image filename to its bundled/hashed URL
const images = import.meta.glob("../assets/images/*.{png,jpg}", {
	eager: true,
	import: "default",
});
const imgFor = (file) =>
	Object.entries(images).find(([p]) => p.endsWith("/" + file))?.[1];

function ProjectRow({ name, link, tags, description, image }) {
	const imageUrl = image && imgFor(image);
	return (
		<div className="grid md:grid-cols-2 gap-10 items-center">
			{/* text, plain on the dark background */}
			<div className={`px-6 md:pl-20 ${imageUrl ? "md:pr-0" : "md:pr-20"}`}>
				<h3 className="text-2xl md:text-3xl font-bold text-neutral-100">{name}</h3>
				<ul className="flex flex-wrap mt-3">
					{tags.map((tag) => (
						<li
							key={tag}
							className="flex m-1 px-1 bg-indigo-400 rounded-sm h-full items-center"
						>
							<p className="text-neutral-900 text-xs">{tag}</p>
						</li>
					))}
				</ul>
				<p className="text-neutral-400 mt-4">{description}</p>
				{link ? (
					<a href={link} target="_blank" rel="noopener noreferrer">
						<button className="bg-indigo-900 hover:bg-indigo-700 p-2 mt-6 rounded text-neutral-300 hover:text-neutral-50 duration-75">
							See Here
						</button>
					</a>
				) : (
					<button className="bg-indigo-900 p-2 mt-6 rounded text-neutral-600 hover:text-neutral-500 duration-75">
						Private
					</button>
				)}
			</div>

			{/* framed screenshot, widened + nudged so it bleeds off the right edge */}
			{imageUrl && (
				<div className="relative px-6 md:px-0 md:w-[125%] md:translate-x-8">
					<div className="rounded-xl border border-white/10 shadow-2xl overflow-hidden bg-white/5 backdrop-blur-md">
						<img src={imageUrl} alt={name} className="w-full block" />
					</div>
				</div>
			)}
		</div>
	);
}

function Projects() {
	return (
		<section className="relative z-20 py-16 overflow-hidden font-sans">
			<b>
				<h1 className="text-neutral-200 text-3xl p-5">Projects</h1>
			</b>
			<div className="flex flex-col gap-24 md:gap-32">
				{projects.map((item) => (
					<ProjectRow key={item.name} {...item} />
				))}
			</div>
		</section>
	);
}

export default Projects;
