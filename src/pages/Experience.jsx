import { Timeline, TimelineItem } from "../components/Timeline";
import experience from "../data/experience.json";

function ExperienceCard({ name, years, position, description }) {
	return (
		<div className="rounded-md p-10 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md shadow-lg duration-300 transition-[background-color] ease-[cubic-bezier(0.77,0,0.175,1)]">
			<b>
				<div className="flex justify-between">
					<h1 className="text-lg md:text-xl text-neutral-200 m-1 w-1/2">{name}</h1>
					<h1 className="text-lg md:text-xl text-neutral-400 m-1">{position}</h1>
				</div>

				<h2 className="text-md md:text-lg text-neutral-400 m-1">{years}</h2>
			</b>
			<hr className="my-2 w-1/3" />
			<div className="flex">
				<p className="text-lg md:text-xl text-neutral-300">{description}</p>
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
			<div className="font-sans p-5">
				<Timeline>
					{experience.map((item) => (
						<TimelineItem key={item.name}>
							<ExperienceCard {...item} />
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</div>
	);
}
