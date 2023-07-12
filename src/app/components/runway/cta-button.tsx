'use client';
import { HTMLProps, PropsWithChildren, useRef } from 'react';
import { AriaLinkOptions, useLink } from '@react-aria/link';
import { clsx } from 'src/app/utils/clsx';

type ColorVariant = 'primary' | 'secondary';

const colorVariantClasses: Record<ColorVariant, string> = {
	primary: 'bg-red-700 hover:bg-red-800 text-white',
	secondary: 'bg-gray-200 hover:bg-gray-300 text-black',
};

type Size = 'sm' | 'md' | 'lg';

const sizeClasses: Record<Size, string> = {
	lg: 'px-12 sm:px-16 py-2 sm:py-3 rounded-xl text-lg sm:text-xl lg:text-2xl',
	md: 'px-8 sm:px-12 py-1.5 sm:py-2 rounded-xl text-lg lg:text-xl',
	sm: 'px-6 py-1.5 rounded-lg text-md lg:text-lg',
};

type CtaButtonLinkProps = AriaLinkOptions &
	PropsWithChildren<{
		href: Exclude<HTMLProps<HTMLAnchorElement>['href'], undefined>;
		target?: HTMLProps<HTMLAnchorElement>['target'];
		variant?: ColorVariant;
		size?: Size;
		className?: string;
	}>;

export function CtaButtonLink({
	variant = 'primary',
	className = '',
	size = 'lg',
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
			className={clsx(colorVariantClasses[variant], sizeClasses[size], 'transition-colors 100m', className)}
			{...linkProps}
		>
			{children}
		</a>
	);
}
