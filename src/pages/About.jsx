import Headshot from "../assets/images/Daniel-headshot.jpg";
import Links from "../components/Links";

function About() {
	return (
		<div className="pt-10 relative z-20">
			<div className="flex-col-reverse md:flex-row md:flex">
				<div className="flex-[1.2] mr-0">
					<div className="flex-col justify-center">
						<div className="py-11 font-roboto">
							<h1 className="left-0 px-[5rem] py-2 w-1/2 text-8xl text-neutral-50 tracking-normal hover:tracking-wide duration-300">
								<b>Daniel Gonzalez</b>
							</h1>
							<Links />
							<h2 className="left-0 px-[5.25rem] py-2 text-2xl text-neutral-100">
								Software Developer
							</h2>
						</div>
					</div>
					<div>
						<p className="m-3 text-xl text-neutral-400 px-[4.5rem]">
							Hi! I&apos;m Daniel Gonzalez, a dual Economics and Computer Science major
							who&apos;s been passionate about coding since age 7. My journey started
							with a Khan Academy JavaScript course, and since then I&apos;ve explored
							everything from game development to machine learning to web apps. I love
							using computer science as a lens to understand and apply economic
							insights, building technology-driven solutions that make a real-world
							impact.
						</p>
					</div>
				</div>
				<div className="flex-1 p-8 min-w-[200px]">
					<img
						className="rounded-sm overflow-hidden"
						src={Headshot}
						alt="Headshot"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
