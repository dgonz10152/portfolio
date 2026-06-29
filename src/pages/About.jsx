import Headshot from "../assets/images/Daniel-headshot.jpg";
import Links from "../components/Links";

function About() {
	return (
		<section className="relative z-20 py-16 font-sans">
			<b>
				<h1 className="text-neutral-200 text-3xl p-5">About</h1>
			</b>
			<div className="grid md:grid-cols-[1fr_auto] gap-10 items-center px-6 md:px-20">
				<div className="max-w-3xl">
					<p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
						Hi there, I&apos;m Daniel! Currently, I am a third-year Mathematics of
						Computation and Economics student at UCLA. My passion lies in solving
						problems using tools from computer science, economics, and math. What
						drives me is creating solutions that help real people.
					</p>
					<p className="text-lg md:text-xl text-neutral-300 leading-relaxed mt-4">
						Currently, my interests are in machine learning, developmental
						economics, and AI development. I&apos;m also a huge nvim fan :)
					</p>
				</div>
				<div className="flex flex-col items-center gap-4 justify-self-center">
					<img
						src={Headshot}
						alt="Daniel Gonzalez"
						className="w-48 md:w-64 rounded-xl border border-white/10 shadow-lg"
					/>
					<Links />
				</div>
			</div>
		</section>
	);
}

export default About;
