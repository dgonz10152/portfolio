import { useState } from "react";
import fireOracleImg from "../assets/images/fireOracle.png";
import pantryPalImg from "../assets/images/pantryPal.png";
import jordanImg from "../assets/images/jordan.png";
import formulaSlugImg from "../assets/images/formulaSlug.png";

function ProjectCard({ name, link, tags, children, imageUrl }) {
	const tagItems = tags.map((tag) => (
		<div key={tag}>
			<li className="flex m-1 px-1 bg-indigo-400 rounded-sm h-full items-center">
				<p className="text-neutral-900 text-xs">{tag}</p>
			</li>
		</div>
	));

	const multiplier = 20;
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		const rect = e.target.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width - 0.5;
		const y = (e.clientY - rect.top) / rect.height - 0.5;
		setMousePosition({ x, y });
	};

	return (
		<div
			onMouseMove={handleMouseMove}
			onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
			className="rounded-md p-3 bg-neutral-900/20 backdrop-blur-md m-4 opacity-30 hover:opacity-100 duration-150 md:w-[45%] flex-grow flex flex-col justify-between shadow-lg"
			style={{
				transform: `perspective(1000px) rotateY(${
					-mousePosition.x * multiplier
				}deg) rotateX(${mousePosition.y * multiplier}deg)`,
				transformStyle: "preserve-3d",
				transformOrigin: "center center",
			}}
		>
			<div>
				<b>
					<h1 className="text-lg md:text-xl text-neutral-200 m-1">{name}</h1>
				</b>
				<ul className="flex">{tagItems}</ul>
				<hr className="my-2" />
				{imageUrl && (
					<div className="mb-3">
						<img src={imageUrl} alt={name} className="w-full rounded-md" />
					</div>
				)}
				<div className="flex">
					<p className="text-neutral-300 p-1">{children}</p>
				</div>
			</div>
			<div>
				{link ? (
					<a href={link} target="_blank">
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
			<div className="md:flex flex-wrap font-roboto">
				<ProjectCard
					name={"Pantry Pal: ACM Hacks Best Impact Winner"}
					link={"https://github.com/dgonz10152/slug-aid"}
					tags={[
						"React",
						"Firebase",
						"Google Maps-Api",
						"Google Cloud-Vision",
						"Next.js",
						"Material UI",
					]}
					imageUrl={pantryPalImg}
				>
					At UCSC, there are numerous on-campus basic needs facilities, but many
					remain underutilized due to confusion about what they offer and where
					they’re located. This app is here to change that. It provides a platform
					for these facilities to post their available products, along with an
					interactive map to help users easily find them. Additionally, the app
					leverages AI-powered image recognition to automatically identify and
					catalog the inventory in these facilities, making it easier for staff to
					itemize their offerings and for students to access up-to-date information
					about available resources.
				</ProjectCard>

				{/* <ProjectCard
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
				</ProjectCard> */}
				<ProjectCard
					name={"Fire Oracle: UN Reboot the Earth Challenge Runner Up"}
					link={"https://github.com/dgonz10152/reboot-the-earth"}
					tags={["React", "Next.js", "Flask", "Scikit-Learn"]}
					imageUrl={fireOracleImg}
				>
					Fire Oracle is a decision-support web application designed to help
					firefighters prioritize geographic areas for prescribed burns using
					data-driven risk and feasibility analysis. The platform leverages a
					custom-trained AI model built on historical wildfire data and integrates
					live weather and environmental inputs to generate dynamic fire risk and
					burn feasibility scores. These insights are presented through an
					interactive, map-based interface built in React, with real-time data served
					from a Flask backend, enabling clear visualization of prioritization
					results and supporting informed, operational decision-making in wildfire
					management.
				</ProjectCard>
				<ProjectCard
					name={"Formula Slug Live Telemetry Visualization"}
					link={"https://github.com/formulaslug/telemetry-vis-software"}
					tags={["React", "Python", "TypeScript", "Next.js", "Apache Arrow"]}
					imageUrl={formulaSlugImg}
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
				<ProjectCard
					name={"Jordan"}
					tags={["React", "TypeScript", "Next.js", "Vapi", "Supabase", "SQL"]}
					link={"https://jordanhired.com"}
					imageUrl={jordanImg}
				>
					Many employees struggle to find the right marketing company due to a lack
					of personalized guidance. This website aims to change that. It provides a
					platform where users can interview with an AI that evaluates their skills,
					experience, and career goals. Based on the interview, the AI intelligently
					matches them with marketing companies that align with their strengths and
					aspirations. Users can access detailed company profiles, explore potential
					career paths, and receive tailored recommendations. Built with React,
					TypeScript, and Next.js, and powered by Vapi for AI-driven conversations,
					the platform utilizes Supabase and SQL to ensure secure data management and
					a seamless user experience.
				</ProjectCard>
			</div>
		</div>
	);
}

export default Projects;
