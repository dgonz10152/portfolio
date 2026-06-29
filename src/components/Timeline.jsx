import { motion } from "motion/react";

// Vertical timeline: a left rail with indigo dots, one node per child item.
// Line and dot share the same x (1rem from the container edge); the dot is centered on it.
export function Timeline({ children }) {
	return (
		<div className="relative pl-8 md:pl-12">
			<div className="absolute left-4 top-2 bottom-2 w-px bg-white/15" />
			{children}
		</div>
	);
}

export function TimelineItem({ children }) {
	return (
		<div className="relative mb-8">
			<motion.div
				initial={{ scale: 0, x: "-50%" }}
				whileInView={{ scale: 1, x: "-50%" }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
				className="absolute top-2 -left-4 md:-left-8 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-slate-950"
			/>
			{children}
		</div>
	);
}
