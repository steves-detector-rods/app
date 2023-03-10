import { PropsWithChildren } from 'react';

export default function SubNavItem({ children, href }: PropsWithChildren<{ href: string }>) {
	return (
		<a href={href} className="text-white text-md align-middle w-auto text-start py-2 sm:py-0">
			{children}
		</a>
	);
}
