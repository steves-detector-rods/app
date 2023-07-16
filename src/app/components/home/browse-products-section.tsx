'use client';
import { PropsWithChildren } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Item } from 'react-stately';
import apparel from 'public/img/products/accessories/apparel.jpg';
import armCuff from 'public/img/products/accessories/arm-cuff.jpg';
import camLock from 'public/img/products/accessories/cam-lock.jpg';
import counterWeight from 'public/img/products/accessories/counter-weight.jpg';
import coobCarbonFiberScoopHandle from 'public/img/products/coob/carbon-fiber-sand-scoop-handler-for-coob-scoops.jpeg';
import xpDuesIICompleteShaft from 'public/img/products/deus/xp-deus-ii-complete-shaft.jpg';
import garrettTwoPieceLowerShaft from 'public/img/products/garrett/garrett-two-piece-carbon-fiber-lower-shaft.jpg';
import minelabCarbonFiberSShaft from 'public/img/products/minelab/equinox-600-800-complete-carbon-fiber-s-shaft-system.jpg';
import tarsacciCarbonFiberLowerRod from 'public/img/products/tarsacci/tarsacci-lower-rod.jpg';
import PageHeader from 'src/app/components/runway/page-header';
import { DivSectionWrapper } from 'src/app/components/runway/section-wrapper';
import { Tabs } from 'src/app/components/runway/tab-list';
import { clsx } from 'src/app/utils/clsx';
import { CtaButtonLink } from '../runway/cta-button';

type FeaturedProductProps = { img: StaticImageData; title: string; alt: string };

function FeaturedProduct({ img, title, alt }: FeaturedProductProps) {
	return (
		<Link
			href={{
				pathname: '/products',
				// TODO - Handle deep linking into brands
				query: {},
			}}
			className={clsx(
				'relative aspect-[900/1000] flex-1 shrink-0 rounded-lg overflow-hidden',
				'sm:hover:scale-[1.03] sm:hover:drop-shadow-xl transition duration-100',
				'active:!scale-[0.96] sm:active:!scale-100',
			)}
		>
			<Image
				src={img}
				alt={alt}
				placeholder="blur"
				loading="lazy"
				fill
				sizes="(max-width: 850px) 50vw, (max-width: 1190px) 33vw, 25vw"
				style={{
					objectFit: 'fill',
					objectPosition: 'center',
				}}
			/>
			<div
				className={clsx(
					'absolute flex flex-col top-0 left-0 right-0 bottom-0 items-center justify-center',
					'bg-gradient-to-t from-black/30 to-black/10',
					'transition-colors duration-100',
				)}
			>
				<span className="font-medium text-2xl sm:text-3xl text-center text-white">{title}</span>
			</div>
		</Link>
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
			alt: 'Stealth carbon fiber sand scoop handles',
			title: 'Stealth',
		},
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
			alt: 'CKG carbon fiber sand scoop handles',
			title: 'CKG',
		},
	],
	Accessories: [
		{ img: counterWeight, alt: 'Counterweight for shafts', title: 'Counterweight' },
		{ img: armCuff, alt: 'Arm Cuffs fit for Steves Detector Rods Shafts', title: 'Arm Cuffs' },
		{ img: camLock, alt: 'Replacement parts for any SDR Rods', title: 'Replacement Parts' },
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

function TabSectionSubHeader({ children }: PropsWithChildren<{}>) {
	return <p className="text-gray-700 text-lg mt-2 mb-6">{children}</p>;
}

export function BrowseProductsSection() {
	return (
		<DivSectionWrapper className="sm:mt-4 mb-8 sm:mb-16">
			<PageHeader className="!mb-2">Browse Our Products</PageHeader>
			<Tabs aria-label="Browse Our Products" defaultSelectedKey="All" orientation="vertical">
				<Item key="All" title="All">
					<div>
						<TabSectionSubHeader>
							Browse our expansive collection of high-quality carbon-fiber metal detector shafts, sand scoop handles,
							and related accessories.
						</TabSectionSubHeader>
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
					<div className="flex flex-col">
						<TabSectionSubHeader>
							Select your detector brand from our list of available options below.
						</TabSectionSubHeader>
						<ProductGrid>
							{featuredProducts.Shafts.map((productProps) => (
								<FeaturedProduct key={productProps.title} {...productProps} />
							))}
						</ProductGrid>
						<CtaButtonLink size="md" className="mt-6 self-center w-full sm:w-auto text-center" href="/products">
							Browse All Shafts
						</CtaButtonLink>
						<p className="text-xl text-gray-600 mt-4">
							Don&apos;t see your brand listed? We may be able to customize to your needs! Send{' '}
							<a className="text-red-800 hover:text-red-700" href="mailto:steve@stevesdetectorrods.com">
								Steve an email
							</a>
							!
						</p>
					</div>
				</Item>
				<Item key="SandScoopHandles" title="Sand Scoop Handles">
					<div className="flex flex-col">
						<TabSectionSubHeader>Select your scoop brand from our list of available options below.</TabSectionSubHeader>
						<ProductGrid>
							{featuredProducts.Scoops.map((productProps) => (
								<FeaturedProduct key={productProps.title} {...productProps} />
							))}
						</ProductGrid>
						<div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full mt-8">
							<CtaButtonLink
								size="md"
								variant="secondary"
								className="self-center w-full sm:w-auto text-center"
								href="/products"
							>
								Browse Other Handles
							</CtaButtonLink>
							<CtaButtonLink size="md" className="self-center w-full sm:w-auto text-center" href="/products">
								Browse All Handles
							</CtaButtonLink>
						</div>
					</div>
				</Item>
				<Item key="Accessories" title="Accessories">
					<div>
						<p className="text-gray-700 text-lg mt-2 mb-6">
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
