function ExperienceCard({ name, children, years }) {
	return (
		<div className="rounded-md p-3 m-4 bg-slate-900  duration-150 w-full">
			<b>
				<h1 className="text-xl text-slate-200 m-1">{name}</h1>
				<h2 className="text-lg text-slate-400 m-1">{years}</h2>
			</b>
			<hr className="my-2 w-1/3" />
			<div className="flex">
				<p className="text-xl text-slate-300">{children}</p>
			</div>
		</div>
	);
}

export default function Experience() {
	return (
		<div className="py-10">
			<b>
				<h1 className="text-slate-200 text-3xl p-5">Experience</h1>
			</b>
			<div className="flex text-roboto w-full">
				<ExperienceCard name={"First Robotics Competition"} years={"2023-24"}>
					While doing First Robotics, I was the programming lead for the New West
					Charter FRC team. As the programming lead I oversaw a team of developers
					who programmed all of the systems for our robot. Our code was developed in
					Java and written to the NI-roboRIO where we were able to qualify for the
					Orange County Regional finals.
				</ExperienceCard>
				<ExperienceCard name={"Joppa Games"} years={"2020-2023"}>
					As the founder of Joppa Games I oversaw a team of 8 developers who created
					experiences which peaked at over 100 daily average users. As the founder I
					delegated projects while also teaching the developers how to interact with
					the game engine and use the lua scripting language.{" "}
				</ExperienceCard>
			</div>
		</div>
	);
}
