import { ReactNode } from 'react';
import TopNav from 'src/app/components/navigation/top-nav';
import Footer from 'src/app/footer';

export default function Template({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col items-center overflow-clip w-screen min-h-screen">
			<TopNav />
			<div className="w-full pb-2 sm:pb-4">{children}</div>
			<Footer />
		</div>
	);
}
