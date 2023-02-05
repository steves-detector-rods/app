import { PropsWithChildren } from 'react';

export default function PageHeader({ children }: PropsWithChildren<{}>) {
	return <h1 className="uppercase text-gray-600 font-medium text-3xl text-center my-3 sm:my-4">{children}</h1>;
}
