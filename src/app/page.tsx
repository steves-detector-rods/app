import { Metadata } from 'next';
import Image from 'next/image';
import { MdEmail, MdOutlineShoppingCart } from 'react-icons/md';
import rollingLandscape from 'public/rolling-landscape.png';
import headShot from 'public/steve-head-shot.jpeg';
import { BrowseProductsSection } from './components/home/browse-products-section';
import { CtaButtonLink } from './components/runway/cta-button';
import { DivSectionWrapper } from './components/runway/section-wrapper';
import { clsx } from './utils/clsx';

function HeroSection() {
	return (
		<div className="relative">
			<Image
				src={rollingLandscape}
				alt="Landscape shot of rolling hills"
				priority
				quality={100}
				fill
				placeholder="blur"
				sizes="100vw"
				style={{
					objectFit: 'cover',
					objectPosition: 'center',
				}}
			/>
			<div
				className={clsx(
					'relative flex flex-col max-w-[100vw] sm:max-w-[70%] justify-center',
					'bg-black bg-opacity-20 sm:bg-opacity-0',
					'px-4 lg:px-12 xl:px-20 py-12 lg:py-24',
				)}
			>
				<h2
					className={clsx(
						'text-center sm:text-start self-center sm:self:start text-3xl',
						'md:text-4xl md:leading-10',
						'lg:text-5xl lg:leading-[3.25rem]',
						'text-white font-normal',
					)}
				>
					Your home for <b>premium-quality</b>, custom-made <b>carbon-fiber</b> metal detector rods and shafts
				</h2>
				<CtaButtonLink href="products" className="mt-8 flex content-center self-center sm:self-start justify-center">
					<MdOutlineShoppingCart className="mt-[0.3125rem] sm:mt-1" />
					<span className="ml-2 lg:ml-3">Shop Now</span>
				</CtaButtonLink>
			</div>
		</div>
	);
}

function ContactSection() {
	return (
		<DivSectionWrapper className="bg-zinc-900 py-12 sm:py-16 flex flex-col w-full items-center justify-center">
			<div className="flex flex-col sm:flex-row w-full items-center justify-center">
				<div className="relative shrink-0 rounded-full overflow-clip h-40 sm:h-52 w-40 sm:w-52 aspect-square">
					<Image
						src={headShot}
						alt="Picture of Steve, founder of Steve's Detector Rods"
						fill
						sizes="13rem"
						loading="lazy"
						placeholder="blur"
					/>
				</div>
				<div className="w-full flex-col max-w-2xl mt-4 ml-0 sm:mt-0 sm:ml-8">
					<h2 className="text-start text-white text-4xl sm:text-4xl">
						<span className="font-light">Hi, I&apos;m</span> <span className="font-medium">Steve</span>! 👋
					</h2>
					<div className="flex flex-col items-center">
						<p className="text-white text-2xl mt-4">
							I&apos;m the founder of <i>Steve&apos;s Detector Rods</i>, and I&apos;d love to answer your questions!
						</p>
						<CtaButtonLink
							href="mailto:steve@stevesdetectorrods.com"
							className="w-full sm:w-auto mt-8 flex self-end content-center justify-center"
						>
							<MdEmail className="mt-1.5 sm:mt-1" />
							<span className="ml-2 lg:ml-3">Email Me Now</span>
						</CtaButtonLink>
					</div>
				</div>
			</div>
		</DivSectionWrapper>
	);
}

export default function Home() {
	return (
		<main className="w-full">
			<HeroSection />
			<BrowseProductsSection />
			<ContactSection />
		</main>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | Home",
	description:
		// eslint-disable-next-line max-len
		"Steve's Detector Rods, Your home of premium-quality carbon-fiber detector rods/shafts, sand-scoop handles, and other accessories for your detecting needs",
};
