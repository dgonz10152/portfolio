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
		<div className="rounded-md p-3 bg-slate-900 m-4 opacity-55 hover:opacity-100 duration-150">
			<b>
				<h1 className="text-xl text-slate-200 m-1">{name}</h1>
			</b>
			<ul className="flex">{tagItems}</ul>
			<hr className="my-2" />
			<div className="flex">
				<p className="text-slate-300 p-1">{children}</p>
			</div>
			<a href={link} target="_blank">
				<button className="bg-indigo-900 hover:bg-indigo-700 p-2 my-2 rounded text-slate-300 hover:text-slate-50 duration-75">
					See Here
				</button>
			</a>
		</div>
	);
}

function Projects() {
	return (
		<div className="py-40">
			<b>
				<h1 className="text-slate-200 text-3xl p-5">Projects</h1>
			</b>
			<div className="md:flex font-roboto">
				<ProjectCard
					name={"SlugAid"}
					link={"https://Google.com"}
					tags={["React", "Firebase", "Google-Maps-Api", "Next.js", "Material UI"]}
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
					tags={["React", "Supabase", "Next.js", "Shadcn"]}
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
			</div>
		</div>
	);
}

export default Projects;
