import { Metadata } from 'next';
import { brands } from './brands';
import { FilterLists } from './filter-lists';
import { ProductItemList } from './product-item-list';
import { products } from './products';
import PageHeader from '../components/runway/page-header';
import { MainSectionWrapper } from '../components/runway/section-wrapper';

export default function Products() {
	const allBrands = Object.entries(brands).map(([key, brand]) => ({ value: key, text: brand.text, type: brand.type }));

	return (
		<MainSectionWrapper>
			<PageHeader>Products</PageHeader>
			<div className="flex w-full h-full space-x-4">
				<div className="shrink-0 min-w-[12rem]">
					<FilterLists
						metalDetectorBrands={allBrands.filter((b) => b.type === 'metal-detector')}
						sandScoopHandleBrands={allBrands.filter((b) => b.type === 'sand-scoop-handle')}
					/>
				</div>
				<ProductItemList
					products={Object.entries(products).map(([key, product]) => ({
						productId: key,
						brandName: brands[product.brandId].text,
						image: product.image,
						name: product.name,
						stock: product.stock,
						isCustomizable: product.customize !== undefined,
						basePrice: product.basePrice,
						discountPrice: product.discountPrice,
					}))}
				/>
			</div>
		</MainSectionWrapper>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | Products",
	description: 'Shop all of the latest metal detector shafts, carbon-fiber rods, sand scoop handles and more!',
};
