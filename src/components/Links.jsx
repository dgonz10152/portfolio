import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "motion/react";

function Links({ className = "" }) {
	return (
		<div className={`flex gap-6 text-2xl text-neutral-400 items-center ${className}`}>
			<motion.a
				href="https://github.com/dgonz10152"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ y: -3, scale: 1.15 }}
				className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
				aria-label="GitHub"
			>
				<FontAwesomeIcon icon={faGithub} />
			</motion.a>
			<motion.a
				href="https://www.linkedin.com/in/daniel-j-gonzález"
				target="_blank"
				rel="noopener noreferrer"
				whileHover={{ y: -3, scale: 1.15 }}
				className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
				aria-label="Linkedin"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</motion.a>
		</div>
	);
}

export default Links;
