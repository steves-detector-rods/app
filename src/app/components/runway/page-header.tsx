import { PropsWithChildren } from 'react';

export default function PageHeader({ children }: PropsWithChildren<{}>) {
	return <h1 className="text-gray-800 font-medium text-3xl text-left my-3 sm:my-4">{children}</h1>;
}
