'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, usePathname } from 'next/navigation';
import { IoEye, IoEyeOutline, IoEyeOff, IoEyeOffOutline } from 'react-icons/io5';
import IconCheckbox from 'src/app/components/runway/icon-checkbox';

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
			className="text-lg"
		>
			<IconCheckbox
				valueKey={item.value}
				text={item.text}
				value={value}
				icon={{
					base: { on: <IoEye />, off: <IoEyeOff /> },
					contrast: { on: <IoEyeOutline />, off: <IoEyeOffOutline /> },
				}}
			/>
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
					replace
				>
					Show All
				</Link>
			</div>
			<FilterListStack items={items} />
		</div>
	);
};
