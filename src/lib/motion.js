// Shared Motion variants for subtle, professional scroll/entrance reveals.
const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };

export const fadeUp = {
	hidden: { opacity: 0, y: 24 },
	show: { opacity: 1, y: 0, transition },
};

export const fromLeft = {
	hidden: { opacity: 0, x: -40 },
	show: { opacity: 1, x: 0, transition },
};

export const fromRight = {
	hidden: { opacity: 0, x: 40 },
	show: { opacity: 1, x: 0, transition },
};

export const fadeIn = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 1 } },
};

export const stagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.12 } },
};

// Spread onto a motion element to make it a once-only scroll reveal.
export const reveal = {
	initial: "hidden",
	whileInView: "show",
	viewport: { once: true, margin: "-80px" },
};
