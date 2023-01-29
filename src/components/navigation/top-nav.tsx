'use client';
import { useState } from 'react';
import Header from 'components/navigation/header';
import SubNav from 'components/navigation/sub-nav/sub-nav';

export default function TopNav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<>
			<Header onHamburgerClick={() => setIsNavOpen((val) => !val)} />
			<SubNav isNavOpen={isNavOpen} />
		</>
	);
}
