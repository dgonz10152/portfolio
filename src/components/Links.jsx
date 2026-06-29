import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links({ className = "" }) {
	return (
		<div className={`flex gap-6 text-2xl text-neutral-400 items-center ${className}`}>
			<a
				href="https://github.com/dgonz10152"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
				aria-label="GitHub"
			>
				<FontAwesomeIcon icon={faGithub} />
			</a>
			<a
				href="https://www.linkedin.com/in/daniel-j-gonzález"
				target="_blank"
				rel="noopener noreferrer"
				className="hover:text-indigo-400 transition-colors duration-200 cursor-pointer"
				aria-label="Linkedin"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</div>
	);
}

export default Links;
