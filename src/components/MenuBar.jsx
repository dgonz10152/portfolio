import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

function MenuItem({ elementId, children }) {
	function scrollTo() {
		let element = document.getElementById(elementId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
	return (
		<motion.button
			onClick={scrollTo}
			whileHover={{ scale: 1.08 }}
			whileTap={{ scale: 0.95 }}
			className="m-0 px-4 md:px-6 py-1.5 rounded-full text-lg text-slate-100 hover:text-indigo-300 duration-200 font-sans"
		>
			{children}
		</motion.button>
	);
}

function MenuBar() {
	return (
		<div className="fixed inset-x-0 top-4 z-40 flex justify-center">
			<motion.div
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
				className="flex items-center rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-md shadow-lg"
			>
				<MenuItem elementId="Hero">
					<FontAwesomeIcon icon={faHouse} aria-label="Home" />
				</MenuItem>
				<MenuItem elementId="About">About</MenuItem>
				<MenuItem elementId="Experience">Experience</MenuItem>
				<MenuItem elementId="Projects">Projects</MenuItem>
			</motion.div>
		</div>
	);
}

export default MenuBar;
