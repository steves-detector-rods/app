'use client';
import { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Item } from 'react-stately';
import apparel from 'public/img/products/accessories/apparel.jpg';
import armCuff from 'public/img/products/accessories/arm-cuff.jpg';
import camLock from 'public/img/products/accessories/cam-lock.jpg';
import counterWeight from 'public/img/products/accessories/counter-weight.jpg';
import rubberWasher from 'public/img/products/accessories/rubber-washer.jpg';
import coobCarbonFiberScoopHandle from 'public/img/products/coob/carbon-fiber-sand-scoop-handler-for-coob-scoops.jpeg';
import xpDuesIICompleteShaft from 'public/img/products/deus/xp-deus-ii-complete-shaft.jpg';
import garrettTwoPieceLowerShaft from 'public/img/products/garrett/garrett-two-piece-carbon-fiber-lower-shaft.jpg';
import minelabCarbonFiberSShaft from 'public/img/products/minelab/equinox-600-800-complete-carbon-fiber-s-shaft-system.jpg';
import tarsacciCarbonFiberLowerRod from 'public/img/products/tarsacci/tarsacci-lower-rod.jpg';
import PageHeader from 'src/app/components/runway/page-header';
import { DivSectionWrapper } from 'src/app/components/runway/section-wrapper';
import { clsx } from 'src/app/utils/clsx';
import { Tabs } from '../runway/tab-list';

type FeaturedProductProps = { img: StaticImageData; title: string; alt: string };

function FeaturedProduct({ img, title, alt }: FeaturedProductProps) {
	return (
		<a
			className={clsx(
				'relative aspect-[900/1000] flex-1 shrink-0 rounded-lg overflow-hidden',
				'sm:hover:scale-105 transition duration-100 hover:cursor-pointer',
			)}
		>
			<Image
				src={img}
				alt={alt}
				placeholder="blur"
				loading="lazy"
				fill
				style={{
					objectFit: 'fill',
					objectPosition: 'center',
				}}
			/>
			<div
				className={clsx(
					'absolute flex flex-col top-0 left-0 right-0 bottom-0 items-center justify-center',
					'bg-gradient-to-t from-black/30 to-black/10 hover:bg-gradient-to-t hover:from-black/30 hover:to-black/30',
					'transition-colors duration-100',
				)}
			>
				<span className="font-medium text-2xl sm:text-3xl text-center text-white">{title}</span>
			</div>
		</a>
	);
}

type TabOpts = 'All' | 'Shafts' | 'Scoops' | 'Accessories';

const featuredProducts: Record<Readonly<Exclude<TabOpts, 'All'>>, Readonly<FeaturedProductProps[]>> = {
	Shafts: [
		{ img: minelabCarbonFiberSShaft, alt: 'Minelab carbon fiber shafts', title: 'Minelab' },
		{ img: garrettTwoPieceLowerShaft, alt: 'Garrett carbon fiber shafts', title: 'Garrett' },
		{ img: xpDuesIICompleteShaft, alt: 'Dues carbon fiber shafts', title: 'XP' },
		{ img: tarsacciCarbonFiberLowerRod, alt: 'Tarsacci carbon fiber shafts', title: 'Tarsacci' },
	],
	Scoops: [
		{
			img: coobCarbonFiberScoopHandle,
			alt: 'CooB carbon fiber sand scoop handles',
			title: 'CooB',
		},
		{
			img: coobCarbonFiberScoopHandle,
			alt: 'Stavr carbon fiber sand scoop handles',
			title: 'Stavr',
		},
		{
			img: coobCarbonFiberScoopHandle,
			alt: 'Xtreme carbon fiber sand scoop handles',
			title: 'Xtreme',
		},
		{
			img: coobCarbonFiberScoopHandle,
			alt: 'Stealth carbon fiber sand scoop handles',
			title: 'Stealth',
		},
		{
			img: coobCarbonFiberScoopHandle,
			alt: 'T-Rex carbon fiber sand scoop handles',
			title: 'T-Rex',
		},
	],
	Accessories: [
		{ img: counterWeight, alt: 'Counter weight for shafts', title: 'Counter Weight' },
		{ img: armCuff, alt: 'Arm Cuffs fit for Steves Detector Rods Shafts', title: 'Arm Cuffs' },
		{ img: camLock, alt: 'Replacement Cam Lock for SDR Shafts', title: 'Cam Lock' },
		{ img: rubberWasher, alt: 'Replacement parts for any SDR Rods', title: 'Replacement Parts' },
		{ img: apparel, alt: "Official Steve's Detector Rods Apparel", title: 'Apparel' },
	],
} as const;

function ProductGrid({ children }: PropsWithChildren<{}>) {
	return (
		<div
			className="grid grid-flow-row 
							gap-4 md:gap-6 xl:gap-8 
							grid-cols-auto-fill-min-40 sm:grid-cols-auto-fill-min-64"
		>
			{children}
		</div>
	);
}

export function BrowseProductsSection() {
	return (
		<DivSectionWrapper className="mt-4 sm:mt-8">
			<PageHeader>Browse Our Products</PageHeader>
			<Tabs aria-label="Browse Our Products" defaultSelectedKey="All" orientation="vertical">
				<Item key="All" title="All">
					<div>
						<p className="text-gray-700 text-lg mt-3 mb-6">Refine your search below</p>
						<ProductGrid>
							{Object.values(featuredProducts)
								.flat(1)
								.map((productProps) => (
									<FeaturedProduct key={productProps.title} {...productProps} />
								))}
						</ProductGrid>
					</div>
				</Item>
				<Item key="CompleteUpperShafts" title="Shafts">
					<div>
						<p className="text-gray-700 text-lg mt-3 mb-6">
							Select your detector brand from our list of available options below
						</p>
						<ProductGrid>
							{featuredProducts.Shafts.map((productProps) => (
								<FeaturedProduct key={productProps.title} {...productProps} />
							))}
						</ProductGrid>
					</div>
				</Item>
				<Item key="SandScoopHandles" title="Sand Scoop Handles">
					<div>
						<p className="text-gray-700 text-lg mt-3 mb-6">
							Select your scoop brand from our list of available options below
						</p>
						<ProductGrid>
							{featuredProducts.Scoops.map((productProps) => (
								<FeaturedProduct key={productProps.title} {...productProps} />
							))}
						</ProductGrid>
					</div>
				</Item>
				<Item key="Accessories" title="Accessories">
					<div>
						<p className="text-gray-700 text-lg mt-3 mb-6">
							Replacement parts, counterweights, cuffs, official merch and more!
						</p>
						<ProductGrid>
							{featuredProducts.Accessories.map((productProps) => (
								<FeaturedProduct key={productProps.title} {...productProps} />
							))}
						</ProductGrid>
					</div>
				</Item>
			</Tabs>
		</DivSectionWrapper>
	);
}
