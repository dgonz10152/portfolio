import { motion } from "motion/react";
import { Timeline, TimelineItem } from "../components/Timeline";
import experience from "../data/experience.json";
import { fadeUp, stagger, reveal } from "../lib/motion";

// Resolve a JSON logo filename to its bundled/hashed URL (drop logos in src/assets/images)
const images = import.meta.glob("../assets/images/*.{png,jpg,svg}", {
	eager: true,
	import: "default",
});
const imgFor = (file) =>
	Object.entries(images).find(([p]) => p.endsWith("/" + file))?.[1];

function ExperienceCard({ name, years, position, description, logo }) {
	const logoUrl = logo && imgFor(logo);
	return (
		<div className="rounded-md p-10 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md shadow-lg duration-300 transition-[background-color] ease-[cubic-bezier(0.77,0,0.175,1)]">
			<div className="flex items-center gap-4">
				{logoUrl && (
					<img
						src={logoUrl}
						alt={name}
						className="w-12 h-12 rounded-md object-contain bg-white/5 p-1 shrink-0"
					/>
				)}
				<b className="flex-1">
					<div className="flex justify-between">
						<h1 className="text-lg md:text-xl text-neutral-200 m-1">{name}</h1>
						<h1 className="text-lg md:text-xl text-neutral-400 m-1">{position}</h1>
					</div>

					<h2 className="text-md md:text-lg text-neutral-400 m-1">{years}</h2>
				</b>
			</div>
			<hr className="my-2 w-1/3" />
			<div className="flex">
				<p className="text-lg md:text-xl text-neutral-300">{description}</p>
			</div>
		</div>
	);
}

export default function Experience() {
	return (
		<motion.div variants={stagger} {...reveal} className="py-10 relative z-20">
			<motion.h1 variants={fadeUp} className="font-bold text-neutral-200 text-3xl p-5">
				Experience
			</motion.h1>
			<div className="font-sans p-5">
				<Timeline>
					{experience.map((item) => (
						<TimelineItem key={item.name}>
							<motion.div variants={fadeUp}>
								<ExperienceCard {...item} />
							</motion.div>
						</TimelineItem>
					))}
				</Timeline>
			</div>
		</motion.div>
	);
}
