import { ReactNode } from 'react';
import Header from 'components/navigation/header';
import SubNav from 'components/navigation/sub-nav/sub-nav';

export default function Template({ children }: { children: ReactNode }) {
	return (
		<div>
			<Header />
			<SubNav />
			<div className="px-4 lg:px-32 xl:px-64 py-4">{children}</div>
		</div>
	);
}
