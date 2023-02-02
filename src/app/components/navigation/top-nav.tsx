'use client';
import { useState } from 'react';
import Header from 'app/components/navigation/header';
import SubNav from 'app/components/navigation/sub-nav/sub-nav';

export default function TopNav() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	return (
		<>
			<Header onHamburgerClick={() => setIsNavOpen((val) => !val)} />
			<SubNav isNavOpen={isNavOpen} />
		</>
	);
}
