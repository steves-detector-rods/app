import { ReactNode } from 'react';
import TopNav from 'app/components/navigation/top-nav';
import Footer from 'app/footer';

export default function Template({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col w-full items-center min-h-screen">
			<TopNav />
			<div className="w-full max-w-6xl px-4 py-2 sm:py-4">{children}</div>
			<Footer />
		</div>
	);
}
