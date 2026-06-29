import { Timeline, TimelineItem } from "../components/Timeline";
import projects from "../data/projects.json";

// Resolve a JSON image filename to its bundled/hashed URL
const images = import.meta.glob("../assets/images/*.{png,jpg}", {
	eager: true,
	import: "default",
});
const imgFor = (file) =>
	Object.entries(images).find(([p]) => p.endsWith("/" + file))?.[1];

// ponytail: dropped the per-card 3D mouse-tilt; it fought the single-column timeline. Re-add if wanted.
function ProjectCard({ name, link, tags, description, image }) {
	const imageUrl = image && imgFor(image);
	return (
		<div className="rounded-md p-3 border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-between shadow-lg">
			<div>
				<b>
					<h1 className="text-lg md:text-xl text-neutral-200 m-1">{name}</h1>
				</b>
				<ul className="flex flex-wrap">
					{tags.map((tag) => (
						<li
							key={tag}
							className="flex m-1 px-1 bg-indigo-400 rounded-sm h-full items-center"
						>
							<p className="text-neutral-900 text-xs">{tag}</p>
						</li>
					))}
				</ul>
				<hr className="my-2" />
				{imageUrl && (
					<div className="mb-3">
						<img src={imageUrl} alt={name} className="w-full rounded-md" />
					</div>
				)}
				<div className="flex">
					<p className="text-neutral-300 p-1">{description}</p>
				</div>
			</div>
			<div>
				{link ? (
					<a href={link} target="_blank" rel="noopener noreferrer">
						<button className="bg-indigo-900 hover:bg-indigo-700 p-2 mt-10 rounded text-neutral-300 hover:text-neutral-50 duration-75">
							See Here
						</button>
					</a>
				) : (
					<button className="bg-indigo-900 p-2 mt-10 rounded text-neutral-600 hover:text-neutral-500 duration-75">
						Private
					</button>
				)}
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="py-10 relative z-20">
			<b>
				<h1 className="text-neutral-200 text-3xl p-5">Projects</h1>
			</b>
			<div className="font-sans p-5">
				<Timeline>
					{projects.map((item) => (
						<TimelineItem key={item.name}>
							<ProjectCard {...item} />
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</div>
	);
}

export default Projects;
