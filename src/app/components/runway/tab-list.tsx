'use client';
import { useRef } from 'react';
import { useTab, useTabList, useTabPanel, AriaTabListProps, AriaTabProps, AriaTabPanelProps } from '@react-aria/tabs';
import { Orientation, Node } from '@react-types/shared';
import { motion } from 'framer-motion';
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
	const { tabProps, isSelected } = useTab({ key }, state, tabRef);

	return (
		<div
			className={clsx(
				'relative text-xl sm:text-lg whitespace-nowrap',
				'hover:cursor-pointer transition-colors duration-150',
				isSelected ? 'text-red-800' : 'hover:text-red-700',
				'focus:outline-none',
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
			<div className="px-3 py-1.5">{rendered}</div>
			{isSelected ? (
				<motion.div
					layoutId="active-tab"
					className={clsx('bg-red-800 h-[2px] w-full')}
					transition={{
						duration: 0.15,
					}}
				/>
			) : null}
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
	vertical: 'flex-row',
};

export function Tabs(props: AriaTabListProps<AriaTabProps>) {
	const state = useTabListState(props);
	const tabsContainerRef = useRef(null);
	const { tabListProps } = useTabList(props, state, tabsContainerRef);

	const { orientation = 'horizontal' } = props;

	return (
		<div className={clsx('tabs flex w-full', orientationTabListClasses[orientation])}>
			<div
				className={clsx(
					'flex justify-start items-center border-b-[1px] border-gray-300 space-x-2 overflow-x-auto',
					orientationTabClasses[orientation],
				)}
				{...tabListProps}
				ref={tabsContainerRef}
			>
				{[...state.collection].map((item: Node<AriaTabProps>) => (
					<Tab key={item.key} item={item} state={state} orientation={orientation} />
				))}
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} />
		</div>
	);
}
