'use client';
import { PropsWithChildren, useRef } from 'react';
import { AriaButtonProps, useButton } from '@react-aria/button';
import { clsx } from 'src/app/utils/clsx';

type Variant = 'primary';

const variantClasses: Record<Variant, string> = {
	primary: 'bg-red-700 hover:bg-red-800',
};

type CtaButtonProps = AriaButtonProps & PropsWithChildren<{ variant?: Variant; className?: string }>;

export function CtaButton({ variant = 'primary', className = '', children, ...props }: CtaButtonProps) {
	const ref = useRef<HTMLButtonElement>(null);
	const { buttonProps } = useButton(props, ref);

	return (
		<button
			ref={ref}
			className={clsx(
				variantClasses[variant],
				'px-12 sm:px-16 py-2 sm:py-3 rounded-xl text-lg sm:text-xl lg:text-2xl text-white',
				'transition-colors 100ms',
				className,
			)}
			{...buttonProps}
		>
			{children}
		</button>
	);
}
