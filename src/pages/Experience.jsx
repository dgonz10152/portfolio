function ExperienceCard({ name, children, years, position = "Developer" }) {
	return (
		<div className="rounded-md p-10 bg-neutral-900/20 hover:bg-neutral-700/20 backdrop-blur-md duration-300 transition-[background-color] ease-[cubic-bezier(0.77,0,0.175,1)]">
			<b>
				<div className="flex justify-between">
					<h1 className="text-lg md:text-xl text-neutral-200 m-1 w-1/2">{name}</h1>
					<h1 className="text-lg md:text-xl text-neutral-400 m-1">{position}</h1>
				</div>

				<h2 className="text-md md:text-lg text-neutral-400 m-1">{years}</h2>
			</b>
			<hr className="my-2 w-1/3" />
			<div className="flex">
				<p className="text-lg md:text-xl text-neutral-300">{children}</p>
			</div>
		</div>
	);
}

export default function Experience() {
	return (
		<div className="py-10 relative z-20">
			<b>
				<h1 className="text-neutral-200 text-3xl p-5">Experience</h1>
			</b>
			<div className="grid text-roboto w-full grid-cols-1 md:grid-cols-2 gap-4 p-5">
				{/* <ExperienceCard
					name={"First Robotics Competition"}
					years={"2023-24"}
					position="Programming Lead"
				>
					As the Programming Lead for the New West Charter FRC team in FIRST
					Robotics, I led a team of developers in designing and implementing software
					for our competition robot. Our work involved programming all robotic
					systems using Java, deploying code to the NI roboRIO, and ensuring seamless
					integration of hardware and software components. Through this role, I
					gained experience in team leadership, real-time system development, and
					problem-solving in a high-stakes, competitive environment.
				</ExperienceCard> */}
				<ExperienceCard
					name={"Research Assistant - Global Fragmentation Project, USC"}
					years={"2025-Present"}
					position="Research Assistant"
				>
					As a Research Assistant to Professor David Schonholzer at USC, I
					contributed to a project on global fragmentation, studying how
					administrative boundaries within urban areas affect population outcomes. I
					developed and refined a city clustering algorithm to delineate urban
					regions, which were then compared against a range of geospatial and
					statistical datasets, including GDP, quality of life indices, and
					demographic distributions. This work involved integrating spatial analysis
					with data-driven research methods, providing insights into the
					socio-economic impacts of urban fragmentation and supporting the
					project&apos;s broader goal of understanding the relationship between city
					structure and human well-being.
				</ExperienceCard>
				<ExperienceCard
					name={"Blueprint"}
					years={"2024-Present"}
					position="Project Lead/Developer"
				>
					Designed and developed a dynamic website for the nonprofit Your Future Is
					Our Business, providing nearly 38,000 K-12 students in the Santa Cruz area
					with a platform for career exploration. Built with React, Firebase, and
					Tailwind, the site enables students to discover career pathways, access
					valuable resources, and connect with opportunities that support their
					professional growth and future success.
				</ExperienceCard>
				<ExperienceCard
					name={"Formula Slug"}
					years={"2024-2025"}
					position="Telemetry Co-Lead/Developer"
				>
					Engineered a high-performance data streaming solution as part of the FSAE
					(Formula SAE) competition, enabling real-time telemetry analysis for a
					Formula-style car. Utilizing WebSocket and Apache Arrow for efficient,
					low-latency data transmission, the solution enhanced performance monitoring
					and decision-making. As co-lead of the telemetry team, I managed a group of
					30 members, overseeing project timelines, onboarding new team members, and
					coordinating development tasks. By integrating React and Three.js, my team
					and I developed advanced visualization tools that allowed over 100 team
					members to track key metrics and analyze performance during testing and
					races, optimizing both vehicle tuning and race strategies in a highly
					competitive environment.
				</ExperienceCard>
				<ExperienceCard
					name={"Joppa Games"}
					years={"2020-2023"}
					position="Founder/Lead Developer"
				>
					As the founder of Joppa Games, I led a team of eight developers in creating
					engaging gaming experiences, reaching a peak of over 100 daily active
					users. In addition to overseeing project development, I provided mentorship
					and training in scripting, networking, game design, and 3D modeling,
					fostering a collaborative environment that promoted both individual and
					team growth.
				</ExperienceCard>
			</div>
		</div>
	);
}
