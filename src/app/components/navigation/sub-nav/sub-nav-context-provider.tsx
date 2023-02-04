import { createContext, PropsWithChildren, useContext, useState } from 'react';

const SubNavContext = createContext<
	{ isSubNavOpen: boolean; toggleSubNavOpen: (isOpen?: boolean) => void } | undefined
>(undefined);

export default function SubNavContextProvider({ children }: PropsWithChildren) {
	const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);

	return (
		<SubNavContext.Provider
			value={{
				isSubNavOpen,
				toggleSubNavOpen: (isOpen?: boolean) => setIsSubNavOpen((val) => (isOpen === undefined ? !val : isOpen)),
			}}
		>
			{children}
		</SubNavContext.Provider>
	);
}

export function useSubNavContext() {
	const ctx = useContext(SubNavContext);

	if (!ctx) {
		throw new Error('You must use useSubNavContext inside of a SubNavContextProvider component!');
	}

	return ctx;
}
