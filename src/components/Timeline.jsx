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
			<div className="absolute top-2 -left-4 md:-left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-slate-950" />
			{children}
		</div>
	);
}
