import { Metadata } from 'next';
import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';
import rollingLandscape from 'public/rolling-landscape.png';
import { BrowseProductsSection } from './components/home/browse-products-section';
import { CtaButtonLink } from './components/runway/cta-button';
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
				<CtaButtonLink
					href="products"
					className="mt-8 sm:mt-8 flex content-center self-center sm:self-start justify-center"
				>
					<MdOutlineShoppingCart className="mt-[0.3125rem] sm:mt-1" />
					<span className="ml-2 lg:ml-3">Shop Now</span>
				</CtaButtonLink>
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<main className="w-full">
			<HeroSection />
			<BrowseProductsSection />
		</main>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | Home",
	description:
		// eslint-disable-next-line max-len
		"Steve's Detector Rods, Your home of premium-quality carbon-fiber detector rods/shafts, sand-scoop handles, and other accessories for your detecting needs",
};
