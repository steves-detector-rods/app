'use client';
import Header from 'src/app/components/navigation/header';
import SubNav from 'src/app/components/navigation/sub-nav/sub-nav';
import SubNavContextProvider from './sub-nav/sub-nav-context-provider';

export default function TopNav() {
	return (
		<SubNavContextProvider>
			<Header />
			<SubNav />
		</SubNavContextProvider>
	);
}
