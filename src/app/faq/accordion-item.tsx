'use client';
import { ReactNode } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { MotionConfig } from 'framer-motion';
import { MdAddCircleOutline, MdRemoveCircleOutline } from 'react-icons/md';
import { clsx } from 'utils/clsx';

export default function AccordionItem({ title, content }: { title: ReactNode; content: ReactNode }) {
	return (
		<MotionConfig transition={{ duration: 0.4, type: 'tween' }}>
			<Disclosure defaultOpen={false}>
				{({ open }) => (
					<div className="border-b-[1px]">
						<Disclosure.Button
							className={clsx(
								'flex flex-row justify-between items-center w-full py-4',
								'text-lg text-left font-medium ',
							)}
						>
							{title}
							{open ? <MdRemoveCircleOutline className="w-6 h-6" /> : <MdAddCircleOutline className="w-6 h-6" />}
						</Disclosure.Button>
						<Transition
							show={open}
							className="overflow-hidden"
							enter="transition transition-[max-height] duration-300 ease-in"
							enterFrom="transform max-h-0"
							enterTo="transform max-h-screen"
							leave="transition transition-[max-height] duration-300 ease-out"
							leaveFrom="transform max-h-screen"
							leaveTo="transform max-h-0"
						>
							<Disclosure.Panel className="pb-4" static>
								{content}
							</Disclosure.Panel>
						</Transition>
					</div>
				)}
			</Disclosure>
		</MotionConfig>
	);
}
