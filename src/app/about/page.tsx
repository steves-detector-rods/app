import Image from 'next/image';

export default function About() {
	return (
		<main className="space-y-1 sm:space-y-2">
			<h1 className="uppercase text-gray-600 font-medium text-xl">About Us</h1>
			<div>
				<Image
					src="/steve-solo-shot.jpeg"
					alt="Steve, owner of Steve's Detector Rods"
					width={248}
					height={302}
					className="float-left mr-2 sm:mr-4 w-[40%] h-auto sm:w-auto"
				/>
				<div className="space-y-2">
					<p className="text-md sm:text-lg lg:text-xl">
						<b>Steve&apos;s Detector Rods</b> is a small business located in Norman, Oklahoma, which was founded in
						early 2018. The business initially emerged from a desire to build a couple of lower rods for my own personal
						Minelab CTX 3030 detector. As a long-time Minelab Explorer user, I became accustomed to ease of changing
						coils on the Explorer as afforded by having the coils pre-attached to a separate, spare lower rod. With the
						price of the extra Explorer lower rods affordable enough to justify the &quot;convenience factor&quot;, I
						acquired a spare rod for each one of the several coils I owned.
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						After purchasing a{' '}
						<a
							href="https://www.minelab.com/usa/metal-detectors/ctx-3030"
							target="_blank"
							rel="noreferrer"
							className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 2s"
						>
							Minelab CTX 3030
						</a>{' '}
						in the fall of 2017, which came packaged with a couple of extra accessory coils, my intent (carried over
						from my years of running Explorers) was to purchase a couple of spare lower rods. However, after discovering
						the high cost of lower rods for the CTX, I decided I could not justify the expense of the &quot;convenience
						factor&quot; offered by having a spare rod for each coil. So, I decided to search for alternatives.
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						As a &quot;do-it-yourselfer&quot; who is handy with tools and who loves a good challenge, I wondered if
						there was a way to build some sort of rod myself, so I set out to explore whether such a project was
						feasible. With ideas shared and gathered through conversations with several fellow detectorists over the
						course of a few weeks, plus the invaluable assistance of Mr. Jeff Herke, I was able to arrive at an initial,
						workable plan. With help from Jeff, I acquired a couple of sets of the necessary parts and supplies, and
						shortly thereafter, success! I managed to achieve my goal - assembling of a pair of custom, hand-made,
						carbon-fiber lower rods for my CTX 3030!
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						After sharing the results of my project online, on a couple of detecting forums, almost immediately other
						detectorists began inquiring about the rods. It was at that point that a new idea (and fledgling company)
						was born!
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						However, to begin producing the rods in greater quantity for sale purposes, additional research was
						required. The research included exploring and discussing{' '}
						<a
							href="https://www.3m.com/3M/en_US/bonding-and-assembly-us/structural-adhesives/"
							target="_blank"
							rel="noreferrer"
							className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 2s"
						>
							appropriate adhesives
						</a>{' '}
						with the engineers/technical support staffs at several international adhesives manufacturers, as well as
						investigating suppliers of carbon-fiber tubes, and fabricators of{' '}
						<a
							href="https://www.dupont.com/delrin.html"
							target="_blank"
							rel="noreferrer"
							className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 2s"
						>
							engineering-grade plastic
						</a>{' '}
						components. Eventually, I was able to form relationships with producers/fabricators, and procure an ongoing
						supply of all the parts and materials needed to successfully assemble successive, small batches of these
						hand-made, custom rods.
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						After initially producing only the CTX 3030 lower rods, my purchase of a{' '}
						<a
							href="https://www.minelab.com/usa/metal-detectors/equinox-800"
							target="_blank"
							rel="noreferrer"
							className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 2s"
						>
							Minelab Equinox 800
						</a>{' '}
						in the spring of 2018 eventually led me to begin experimenting with the idea of producing lower rods for the
						Equinox, as well. After a couple of months of design work, I began producing and selling Equinox
						carbon-fiber lower rods, right around the time (fortuitously) that Minelab began selling their accessory
						6&quot; and 12&quot; x 15&quot; coils! Later, in the fall of 2018, after requests/suggestions from several
						customers, I began a lengthy period of extensive design/engineering work on an upper shaft for the Equinox,
						as well. The ultimate goal, in designing that upper shaft, is that it would permit me to combine my Equinox
						lower rods with the new upper shaft design, to offer a complete Equinox carbon-fiber shaft system. After a
						succesful prototype and field-testing stage on the upper shaft, I was able to begin production and sales of
						complete, carbon-fiber shafts for the Equinox, starting in January, 2019.
					</p>

					<p className="text-md sm:text-lg lg:text-xl">
						And so, in the immortal words of Paul Harvey, &quot;now you know the rest of the story!&quot;
					</p>
				</div>
			</div>
		</main>
	);
}
