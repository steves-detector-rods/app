'use client';
import { useRef } from 'react';
import { useTab, useTabList, useTabPanel, AriaTabListProps, AriaTabProps, AriaTabPanelProps } from '@react-aria/tabs';
import { Orientation, Node } from '@react-types/shared';
import { TabListState, useTabListState } from 'react-stately';
import { clsx } from 'src/app/utils/clsx';

function Tab({
	item,
	state,
}: {
	item: Node<AriaTabProps>;
	state: TabListState<AriaTabProps>;
	orientation?: Orientation;
}) {
	const { key, rendered } = item;
	const tabRef = useRef<HTMLDivElement>(null);
	const { tabProps, isSelected } = useTab({ key }, { ...state }, tabRef);

	return (
		<div
			className={clsx(
				'relative text-lg whitespace-nowrap',
				'py-1 sm:py-1.5 px-2 sm:px-1 w-full sm:w-min',
				'hover:cursor-pointer',
				"after:content-[''] after:absolute after:block after:h-[2px] after:mt-1.5",
				'after:transition-all after:duration-[0.2s]',
				...(isSelected
					? [
							'sm:after:w-[100%] sm:after:left-0 sm:after:bg-red-800 sm:text-red-800 sm:bg-transparent sm:rounded-none',
							'font-normal',
							'bg-red-800 text-white rounded-lg',
					  ]
					: [
							'font-light',
							'sm:hover:after:w-[100%] sm:hover:after:left-0 sm:hover:after:bg-red-600 sm:hover:text-red-700',
							// eslint-disable-next-line max-len
							'sm:after:w-0 sm:after:right-0 sm:after:bg-red-700 sm:after:text-red-700',
					  ]),
				'outline-red-700',
			)}
			{...tabProps}
			onClick={() => {
				if (typeof window === 'undefined') return;

				const toScroll = (tabRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - 104;

				if (!isSelected || toScroll < window.scrollY) return;

				window.scrollTo({ behavior: 'smooth', top: toScroll });
			}}
			ref={tabRef}
		>
			{rendered}
		</div>
	);
}

function TabPanel({ state, ...props }: AriaTabPanelProps & { state: TabListState<AriaTabProps> }) {
	const panelRef = useRef(null);
	const { tabPanelProps } = useTabPanel(props, state, panelRef);
	return (
		<div {...tabPanelProps} ref={panelRef}>
			{state.selectedItem?.props.children}
		</div>
	);
}

const orientationTabListClasses: Record<Orientation, string> = {
	horizontal: 'flex-row space-y-6',
	vertical: 'flex-col w-full',
};

const orientationTabClasses: Record<Orientation, string> = {
	horizontal: 'flex-col',
	vertical: 'flex-row sm:border-b-2 space-y-2 sm:space-y-0 sm:space-x-6',
};

export function Tabs(props: AriaTabListProps<AriaTabProps>) {
	const state = useTabListState(props);
	const tabsRef = useRef(null);
	const { tabListProps } = useTabList(props, state, tabsRef);

	const { orientation = 'horizontal' } = props;

	return (
		<div className={clsx('flex w-full', orientationTabListClasses[orientation])}>
			<div
				className={clsx(
					'flex flex-col sm:flex-row justify-start items-center overflow-x-auto sm:overflow-x-clip',
					orientationTabClasses[orientation],
				)}
				{...tabListProps}
				ref={tabsRef}
			>
				{[...state.collection].map((item: Node<AriaTabProps>) => (
					<Tab key={item.key} item={item} state={state} orientation={orientation} />
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	);
}
