// Vertical timeline: a left rail with indigo dots, one node per child item.
export function Timeline({ children }) {
	return (
		<div className="relative pl-8 md:pl-12">
			<div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-white/15" />
			{children}
		</div>
	);
}

export function TimelineItem({ children }) {
	return (
		<div className="relative mb-8">
			<div className="absolute -left-[1.35rem] md:-left-[1.85rem] top-2 w-3 h-3 rounded-full bg-indigo-400 ring-4 ring-slate-950" />
			{children}
		</div>
	);
}
