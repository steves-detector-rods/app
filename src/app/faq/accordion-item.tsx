'use client';
import { ReactNode } from 'react';
import { Disclosure } from '@headlessui/react';

export default function AccordionItem({ title, content }: { title: ReactNode; content: ReactNode }) {
	return (
		<Disclosure defaultOpen={false}>
			<Disclosure.Button className="text-lg border-y-2 text-left py-4">{title}</Disclosure.Button>
			<Disclosure.Panel className="pt-1 pb-4">{content}</Disclosure.Panel>
		</Disclosure>
	);
}
