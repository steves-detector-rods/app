import { PropsWithChildren } from 'react';

export default function PageHeader({ children }: PropsWithChildren<{}>) {
	return <h1 className="uppercase text-gray-600 font-medium text-xl">{children}</h1>;
}
