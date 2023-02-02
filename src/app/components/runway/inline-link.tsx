import { HTMLProps, PropsWithChildren } from 'react';

export default function InlineLink({ children, ...rest }: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) {
	return (
		<a className="text-red-800 hover:text-red-700 focus:text-red-900 transition-colors 1s" {...rest}>
			{children}
		</a>
	);
}
