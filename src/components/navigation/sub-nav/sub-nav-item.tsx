import { PropsWithChildren } from 'react';

export default function SubNavItem({ children, href }: PropsWithChildren<{ href: string }>) {
	return (
		<a href={href} className="text-white text-md">
			{children}
		</a>
	);
}
