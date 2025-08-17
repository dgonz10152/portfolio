import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Links() {
	return (
		<>
			<h1 className="text-xl text-neutral-400 m-1 left-0 px-2 md:px-[5rem] flex-row">
				<a
					href="https://github.com/dgonz10152"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block hover:text-indigo-500 transition-colors duration-200 cursor-pointer"
					aria-label="GitHub"
				>
					<FontAwesomeIcon icon={faGithub} />
				</a>
				<a
					href="https://www.linkedin.com/in/daniel-j-gonzález"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block hover:text-indigo-500 transition-colors duration-200 cursor-pointer"
					aria-label="Linkedin"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</h1>
		</>
	);
}

export default Links;
