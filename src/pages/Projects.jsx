function ProjectCard({ name, link, image, tags, children }) {
	console.log(image);
	const tagItems = tags.map((tag) => (
		<div key={tag}>
			<li className="m-1 p-1 bg-indigo-400 rounded-sm">
				<p className="text-slate-900 text-xs">{tag}</p>
			</li>
		</div>
	));
	return (
		<div className="rounded-md p-3 bg-slate-900 m-4 opacity-55 hover:opacity-100 duration-150 md:w-[45%] flex-grow flex flex-col justify-between">
			<div>
				<b>
					<h1 className="text-xl text-slate-200 m-1">{name}</h1>
				</b>
				<ul className="flex">{tagItems}</ul>
				<hr className="my-2" />
				<div className="flex">
					<p className="text-slate-300 p-1">{children}</p>
				</div>
			</div>
			<div>
				<a href={link} target="_blank">
					<button className="bg-indigo-900 hover:bg-indigo-700 p-2 mt-10 rounded text-slate-300 hover:text-slate-50 duration-75">
						See Here
					</button>
				</a>
			</div>
		</div>
	);
}

function Projects() {
	return (
		<div className="py-10">
			<b>
				<h1 className="text-slate-200 text-3xl p-5">Projects</h1>
			</b>
			<div className="md:flex flex-wrap font-roboto">
				<ProjectCard
					name={"SlugAid: ACM Hacks Best Impact Winner"}
					link={"https://github.com/dgonz10152/slug-aid"}
					tags={[
						"React",
						"Firebase",
						"Google Maps-Api",
						"Google Cloud-Vision",
						"Next.js",
						"Material UI",
					]}
				>
					There are many on campus basic needs facilities here at UCSC, but
					unfortunately many of them are underutilized. People are confused as to
					what these facilities are, where they are, and what they have to offer.
					That ends today. This is an app that will allow these facilities to post
					the products that they offer, and a map leading people to easily find them.
				</ProjectCard>
				<ProjectCard
					name={"T4SG Engangered Animal Tracker"}
					link={"https://github.com/dgonz10152/t4sg-round2"}
					tags={["React", "Next.js", "Supabase", "Shadcn"]}
				>
					Many endangered animals across the globe remain at risk due to a lack of
					accessible, up-to-date information. This website aims to change that. It
					provides a platform where users can upload, edit, and access critical
					information about endangered species. Users can contribute detailed
					profiles about various animals, including their habitats, population, and
					other species data. The platform also features interactive maps that show
					where these animals are found, helping researchers and conservationists
					track populations.
				</ProjectCard>
				<ProjectCard
					name={"Formula Slug Live Telemetry Visualization"}
					link={"https://github.com/formulaslug/telemetry-vis-software"}
					tags={["React", "Python", "TypeScript", "Next.js", "Apache Arrow"]}
				>
					Modern motorsport demands real-time data analysis to optimize performance
					and strategy. This project delivers a seamless data streaming solution for
					Formula Slug&apos;s FS-3 car, enabling instant telemetry visualization. By
					leveraging WebSocket and Apache Arrow, it ensures efficient, low-latency
					data transmission. The frontend, built with React and Three.js, provides an
					interactive and dynamic dashboard for real-time performance monitoring.
					With the over 100 Formula Slug team members, this platform empowers
					engineers, drivers, and analysts to make data-driven decisions faster,
					enhancing both vehicle performance and race strategy.
				</ProjectCard>
			</div>
		</div>
	);
}

export default Projects;
