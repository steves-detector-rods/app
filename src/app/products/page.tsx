import { FilterList } from './filter-list/filter-list';
import { ProductItemList } from './product-item-list';
import PageHeader from '../components/runway/page-header';

type BrandId =
	| 'brand-minelab'
	| 'brand-garrett'
	| 'brand-tarsacci'
	| 'brand-t-rex'
	| 'brand-stealth'
	| 'brand-xtreme'
	| 'brand-coob'
	| 'brand-stavr';

const brands: Readonly<Record<BrandId, { text: string }>> = {
	'brand-minelab': { text: 'Minelab' },
	'brand-garrett': { text: 'Garrett' },
	'brand-tarsacci': { text: 'Tarsacci' },
	'brand-t-rex': { text: 'T-Rex' },
	'brand-stealth': { text: 'Stealth' },
	'brand-xtreme': { text: 'Xtreme' },
	'brand-coob': { text: 'CooB' },
	'brand-stavr': { text: 'Stavr' },
} as const;

type ProductInStock = { type: 'in-stock'; quantity: number };

type ProductLimitedStock = { type: 'limited' };

type ProductOutOfStock = { type: 'out-of-stock'; allowWaitList: boolean };

type ProductStock = ProductLimitedStock | ProductInStock | ProductOutOfStock;

type Product = {
	brandId: BrandId;
	image: { src: string; width: number; height: number; alt: string };
	name: string;
	stock?: ProductStock;
};

const products: Readonly<Record<string, Product>> = {
	'product-1': {
		brandId: 'brand-minelab',
		name: 'Minelab Equinox 600/800 Complete Carbon-Fiber S-Shaft System',
		image: {
			src: '/products/minelab/equinox-600-800-complete-carbon-fiber-s-shaft-system.jpeg',
			alt: 'Preview image of Minelab Equinox 600/800 Complete Carbon-Fiber S-Shaft System',
			width: 353,
			height: 150,
		},
	},
	'product-2': {
		brandId: 'brand-garrett',
		name: 'Garrett AT-series Complete Carbon-Fiber S-Shaft',
		image: {
			src: '/products/garrett/garrett-at-series-complete-carbon-fiber-s-shaft.jpeg',
			alt: 'Preview image of Garrett AT-series Complete Carbon-Fiber S-Shaft',
			width: 321,
			height: 150,
		},
		stock: { type: 'limited' },
	},
	'product-3': {
		brandId: 'brand-t-rex',
		name: 'Carbon-Fiber Sand Scoop Handles for T-Rex scoops',
		image: {
			src: '/products/t-rex/carbon-fiber-sand-scoop-handles-for-t-rex-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for T-Rex scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'in-stock', quantity: 10 },
	},
	'product-4': {
		brandId: 'brand-stealth',
		name: 'Carbon-Fiber Sand Scoop Handles for Stealth scoops',
		image: {
			src: '/products/stealth/carbon-fiber-sand-scoop-handles-for-stealth-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for Stealth scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'in-stock', quantity: 4 },
	},
	'product-5': {
		brandId: 'brand-xtreme',
		name: 'Carbon-Fiber Sand Scoop Handles for Xtreme scoops',
		image: {
			src: '/products/xtreme/carbon-fiber-sand-scoop-handles-for-xtreme-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for Xtreme scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'out-of-stock', allowWaitList: true },
	},
	'product-6': {
		brandId: 'brand-coob',
		name: 'Carbon-Fiber Sand Scoop Handles for CooB scoops (30.5mm/1.2" dia.)',
		image: {
			src: '/products/coob/carbon-fiber-sand-scoop-handler-for-coob-scoops-30.5mm-1.2in-dia.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for CooB scoops (30.5mm/1.2" dia.)',
			width: 282,
			height: 150,
		},
		stock: { type: 'out-of-stock', allowWaitList: false },
	},
} as const;

export default function Products() {
	return (
		<main>
			<PageHeader>Products</PageHeader>
			<div className="flex w-full h-full space-x-4">
				<div className="shrink-0 min-w-[12rem]">
					<FilterList items={Object.entries(brands).map(([key, brand]) => ({ value: key, text: brand.text }))} />
				</div>
				<ProductItemList
					products={Object.entries(products).map(([key, product]) => ({
						productKey: key,
						brandName: brands[product.brandId].text,
						image: product.image,
						name: product.name,
						stock: product.stock,
					}))}
				/>
			</div>
		</main>
	);
}
