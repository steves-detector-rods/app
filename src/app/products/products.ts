import { BrandId } from './brands';

type ProductInStock = { type: 'in-stock'; quantity: number };

type ProductLimitedStock = { type: 'limited' };

type ProductOutOfStockWithWaitList = { allowWaitList: true; waitListId: string };

type ProductOutOfStockWithNoWaitList = { allowWaitList: false };

type ProductOutOfStock = { type: 'out-of-stock' } & (ProductOutOfStockWithWaitList | ProductOutOfStockWithNoWaitList);

type ProductStock = ProductLimitedStock | ProductInStock | ProductOutOfStock;

type ProductCustomizationNoOptions = { type: 'customizable-general' };

type BaseCustomizationOption = { label: string };

type CheckboxOption = BaseCustomizationOption & {
	type: 'checkbox';
	options: { value: string; text: string; isDefault?: boolean }[];
};

export type ProductCustomizationCommonOptions = {
	type: 'customizable-custom-options';
	customizationOptions: CheckboxOption[];
};

type ProductCustomization = ProductCustomizationCommonOptions | ProductCustomizationNoOptions;

export type Product = {
	productId: string;
	brandId: BrandId;
	image: { src: string; width: number; height: number; alt: string };
	name: string;
	basePrice: `${number}.${number}`;
	discountPrice?: `${number}.${number}`;
	stock?: ProductStock;
	customize?: ProductCustomization;
};

/**
 * This products object is temporary until we nail down the datatype
 */
export const products: Record<string, Product> = {
	'product-1': {
		productId: 'product-1',
		brandId: 'brand-minelab',
		name: 'Minelab Equinox 600/800 Complete Carbon-Fiber S-Shaft System',
		basePrice: '159.00',
		image: {
			src: '/products/minelab/equinox-600-800-complete-carbon-fiber-s-shaft-system.jpeg',
			alt: 'Preview image of Minelab Equinox 600/800 Complete Carbon-Fiber S-Shaft System',
			width: 353,
			height: 150,
		},
	},
	'product-2': {
		productId: 'product-2',
		brandId: 'brand-garrett',
		name: 'Garrett AT-series Complete Carbon-Fiber S-Shaft',
		basePrice: '159.00',
		image: {
			src: '/products/garrett/garrett-at-series-complete-carbon-fiber-s-shaft.jpeg',
			alt: 'Preview image of Garrett AT-series Complete Carbon-Fiber S-Shaft',
			width: 321,
			height: 150,
		},
		stock: { type: 'limited' },
		customize: {
			type: 'customizable-custom-options',
			customizationOptions: [
				{
					type: 'checkbox',
					label: 'Length',
					options: [
						{ text: 'Small (40")', value: 'length-small' },
						{ text: 'Medium (46")', value: 'length-medium', isDefault: true },
						{ text: 'Large (56")', value: 'length-large' },
					],
				},
				{
					type: 'checkbox',
					label: 'Color',
					options: [
						{ text: 'Red', value: 'color-red' },
						{ text: 'Black', value: 'color-black', isDefault: true },
						{ text: 'Green', value: 'color-green' },
						{ text: 'Blue', value: 'color-blue' },
						{ text: 'Camouflage', value: 'color-camouflage' },
						{ text: 'Dark Green', value: 'color-dark-green' },
					],
				},
			],
		},
	},
	'product-3': {
		productId: 'product-3',
		brandId: 'brand-t-rex',
		name: 'Carbon-Fiber Sand Scoop Handles for T-Rex scoops',
		basePrice: '135.00',
		image: {
			src: '/products/t-rex/carbon-fiber-sand-scoop-handles-for-t-rex-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for T-Rex scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'in-stock', quantity: 10 },
	},
	'product-4': {
		productId: 'product-4',
		brandId: 'brand-stealth',
		name: 'Carbon-Fiber Sand Scoop Handles for Stealth scoops',
		basePrice: '135.00',
		image: {
			src: '/products/stealth/carbon-fiber-sand-scoop-handles-for-stealth-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for Stealth scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'in-stock', quantity: 4 },
	},
	'product-5': {
		productId: 'product-5',
		brandId: 'brand-xtreme',
		name: 'Carbon-Fiber Sand Scoop Handles for Xtreme scoops',
		basePrice: '135.00',
		image: {
			src: '/products/xtreme/carbon-fiber-sand-scoop-handles-for-xtreme-scoops.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for Xtreme scoops',
			width: 282,
			height: 150,
		},
		stock: { type: 'out-of-stock', allowWaitList: true, waitListId: 'product-5' },
	},
	'product-6': {
		productId: 'product-6',
		brandId: 'brand-coob',
		name: 'Carbon-Fiber Sand Scoop Handles for CooB scoops (30.5mm/1.2" dia.)',
		basePrice: '135.00',
		image: {
			src: '/products/coob/carbon-fiber-sand-scoop-handler-for-coob-scoops-30.5mm-1.2in-dia.jpeg',
			alt: 'Preview image of Carbon-Fiber Sand Scoop Handles for CooB scoops (30.5mm/1.2" dia.)',
			width: 282,
			height: 150,
		},
		stock: { type: 'out-of-stock', allowWaitList: false },
	},
};
