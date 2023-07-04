import { PropsWithChildren } from 'react';
import { clsx } from 'src/app/utils/clsx';

export function MainPageWrapper({ className = '', children }: PropsWithChildren<{ className?: string }>) {
	return <main className={clsx('px-4 lg:px-12 xl:px-20', className)}>{children}</main>;
}
