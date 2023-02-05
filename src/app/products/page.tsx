import { FilterList } from './filter-list/filter-list';
import PageHeader from '../components/runway/page-header';

const brands = [
	{ id: 'brand-minelab', text: 'Minelab' },
	{ id: 'brand-garrett', text: 'Garrett' },
	{ id: 'brand-tarsacci', text: 'Tarsacci' },
	{ id: 'brand-t-rex', text: 'T-Rex' },
	{ id: 'brand-stealth', text: 'Stealth' },
	{ id: 'brand-xtreme', text: 'Xtreme' },
	{ id: 'brand-coob', text: 'CooB' },
	{ id: 'brand-stavr', text: 'Stavr' },
] as const;

export default function Products() {
	return (
		<main>
			<PageHeader>Products</PageHeader>
			<div className="flex w-full h-full space-x-4">
				<div className="shrink-0 min-w-[12rem]">
					<FilterList items={brands.map((brand) => ({ value: brand.id, text: brand.text }))} />
				</div>
				<div className="w-full border-l-2 px-2">There will be product info here</div>
			</div>
		</main>
	);
}
