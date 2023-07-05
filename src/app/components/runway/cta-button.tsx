'use client';
import { HTMLProps, PropsWithChildren, useRef } from 'react';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { clsx } from 'src/app/utils/clsx';

type Variant = 'primary';

const variantClasses: Record<Variant, string> = {
	primary: 'bg-red-700 hover:bg-red-800',
};

type CtaButtonLinkProps = AriaLinkOptions &
	PropsWithChildren<{
		href: Exclude<HTMLProps<HTMLAnchorElement>['href'], undefined>;
		target?: HTMLProps<HTMLAnchorElement>['target'];
		variant?: Variant;
		className?: string;
	}>;

export function CtaButtonLink({
	variant = 'primary',
	className = '',
	href,
	target,
	children,
	...props
}: CtaButtonLinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	const { linkProps } = useLink(props, ref);

	return (
		<a
			ref={ref}
			href={href}
			target={target}
			className={clsx(
				variantClasses[variant],
				'px-12 sm:px-16 py-2 sm:py-3 rounded-xl text-lg sm:text-xl lg:text-2xl text-white',
				'transition-colors 100ms',
				className,
			)}
			{...linkProps}
		>
			{children}
		</a>
	);
}
