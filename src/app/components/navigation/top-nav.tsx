'use client';
import Header from 'app/components/navigation/header';
import SubNav from 'app/components/navigation/sub-nav/sub-nav';
import SubNavContextProvider from './sub-nav/sub-nav-context-provider';

export default function TopNav() {
	return (
		<SubNavContextProvider>
			<Header />
			<SubNav />
		</SubNavContextProvider>
	);
}
