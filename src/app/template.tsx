import { ReactNode } from 'react';
import TopNav from 'components/navigation/top-nav';

export default function Template({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col w-full items-center">
			<TopNav />
			<div className="w-full max-w-6xl px-4 py-2 sm:py-4">{children}</div>
		</div>
	);
}
