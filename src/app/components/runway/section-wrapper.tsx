import { PropsWithChildren } from 'react';
import { clsx } from 'src/app/utils/clsx';

export function MainSectionWrapper({ className = '', children }: PropsWithChildren<{ className?: string }>) {
	return <main className={clsx('px-4 lg:px-12 xl:px-20', className)}>{children}</main>;
}

export function DivSectionWrapper({ className = '', children }: PropsWithChildren<{ className?: string }>) {
	return <div className={clsx('px-4 lg:px-12 xl:px-20', className)}>{children}</div>;
}
