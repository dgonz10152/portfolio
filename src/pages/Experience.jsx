function ExperienceCard({ name, children, years }) {
	return (
		<div className="rounded-md p-10 m-4 bg-neutral-900/20 backdrop-blur-sm  duration-150 w-full md:w-[40%] flex-grow">
			<b>
				<h1 className="text-xl text-neutral-200 m-1">{name}</h1>
				<h2 className="text-lg text-neutral-400 m-1">{years}</h2>
			</b>
			<hr className="my-2 w-1/3" />
			<div className="flex">
				<p className="text-xl text-neutral-300">{children}</p>
			</div>
		</div>
	);
}

export default function Experience() {
	return (
		<div className="py-10">
			<b>
				<h1 className="text-neutral-200 text-3xl p-5">Experience</h1>
			</b>
			<div className="flex text-roboto w-full flex-wrap">
				<ExperienceCard name={"First Robotics Competition"} years={"2023-24"}>
					As the Programming Lead for the New West Charter FRC team in FIRST
					Robotics, I led a team of developers in designing and implementing software
					for our competition robot. Our work involved programming all robotic
					systems using Java, deploying code to the NI roboRIO, and ensuring seamless
					integration of hardware and software components. Through this role, I
					gained experience in team leadership, real-time system development, and
					problem-solving in a high-stakes, competitive environment.
				</ExperienceCard>
				<ExperienceCard name={"Joppa Games"} years={"2020-2023"}>
					As the founder of Joppa Games, I led a team of eight developers in creating
					engaging gaming experiences, reaching a peak of over 100 daily active
					users. In addition to overseeing project development, I provided mentorship
					and training in scripting, networking, game design, and 3D modeling,
					fostering a collaborative environment that promoted both individual and
					team growth.
				</ExperienceCard>
				<ExperienceCard name={"Formula Slug"} years={"2024-Present"}>
					Engineered a high-performance data streaming solution as part of the FSAE
					(Formula SAE) competition, enabling real-time telemetry analysis for a
					Formula-style car. Utilizing WebSocket and Apache Arrow for efficient,
					low-latency data transmission, the solution enhanced performance monitoring
					and decision-making. By integrating React and Three.js, my team and I
					developed advanced visualization tools that allowed over 100 team members
					to track key metrics and analyze performance during testing and races,
					optimizing both vehicle tuning and race strategies in a highly competitive
					environment.
				</ExperienceCard>
				<ExperienceCard name={"Blueprint"} years={"2024-Present"}>
					Designed and developed a dynamic website for the nonprofit Your Future Is
					Our Business, providing nearly 38,000 K-12 students in the Santa Cruz area
					with a platform for career exploration. Built with React, Firebase, and
					Tailwind, the site enables students to discover career pathways, access
					valuable resources, and connect with opportunities that support their
					professional growth and future success.
				</ExperienceCard>
			</div>
		</div>
	);
}
