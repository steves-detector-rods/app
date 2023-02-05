'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { IoEye, IoEyeOff } from 'react-icons/io5';

type Item = {
	value: string;
	text: string;
};

type FilterListItemProps = {
	item: Item;
};

export default function FilterListItem({ item }: FilterListItemProps) {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const value = useMemo(() => {
		const paramValue = searchParams.get(item.value);

		if (!paramValue) return true;

		return paramValue === 'true';
	}, [item.value, searchParams]);

	return (
		<Link
			href={{
				pathname: pathname,
				query: {
					...Object.fromEntries(searchParams.entries()),
					[item.value]: !value,
				},
			}}
			replace
			className="group flex items-center text-lg"
		>
			<input
				type="checkbox"
				id={`filter-list-checkbox-${item.value}`}
				value={item.value}
				className="hidden"
				checked={value}
				readOnly
			/>
			<label htmlFor={`filter-list-checkbox-${item.value}`}>{value ? <IoEye /> : <IoEyeOff />}</label>
			<label htmlFor={`filter-list-checkbox-${item.value}`} className="ml-3">
				{item.text}
			</label>
		</Link>
	);
}

const FilterListStack = ({ items }: { items: Item[] }) => {
	return (
		<div className="space-y-1 mt-2">
			{items.map((item) => (
				<FilterListItem key={`filter-list-${item.value}`} item={item} />
			))}
		</div>
	);
};

export const FilterList = ({ items }: { items: Item[] }) => {
	const pathname = usePathname();

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center justify-between">
				<p className="text-md text-gray-500">Brand</p>
				<Link
					href={{ pathname: pathname, query: {} }}
					className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 1s text-sm"
				>
					Show All
				</Link>
			</div>
			<FilterListStack items={items} />
		</div>
	);
};
