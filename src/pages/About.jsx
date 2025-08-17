import Headshot from "../assets/images/Daniel-headshot.jpg";

function About() {
	return (
		<div className="pt-10">
			<div className="flex-col-reverse md:flex-row md:flex">
				<div className="flex-[1.2] mr-0">
					<div className="flex-col justify-center">
						<div className="py-11 font-roboto">
							<h1 className="left-0 px-[5rem] py-2 w-1/2 text-8xl text-slate-50 tracking-normal hover:tracking-wide duration-300">
								<b>Daniel Gonzalez</b>
							</h1>
							ß
							<h2 className="left-0 px-[5.25rem] py-2 text-2xl text-slate-100">
								Software Developer
							</h2>
						</div>
					</div>
					<div>
						<p className="m-3 text-xl text-slate-400 px-[4.5rem] z-30">
							Hello! My name is Daniel Gonzalez and I&apos;ve been a passionate
							developer since the age of 7. It all started when I took a Khan Academy
							course on javascript and instantly fell in love with development. Since
							then I&apos;ve tried my hand at many different areas from game
							development, to machine learning, to web development. Currently my main
							focus is leveraging technology to create solutions for the world!
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
