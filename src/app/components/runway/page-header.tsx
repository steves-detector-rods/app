import { PropsWithChildren } from 'react';
import { clsx } from 'src/app/utils/clsx';

interface PageHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	headingLevel?: React.ElementType;
}

export default function PageHeader({
	headingLevel = 'h1',
	className,
	children,
	...props
}: PropsWithChildren<PageHeadingProps>) {
	const Heading = headingLevel;

	return (
		<Heading className={clsx('text-gray-800 font-medium text-3xl text-left my-3 sm:my-4', className)} {...props}>
			{children}
		</Heading>
	);
}
