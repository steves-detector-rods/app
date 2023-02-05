import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useManipulateBodyScroll } from 'src/app/hooks/useLockBodyScroll';

const SubNavContext = createContext<
	{ isSubNavOpen: boolean; toggleSubNavOpen: (isOpen?: boolean) => void } | undefined
>(undefined);

export default function SubNavContextProvider({ children }: PropsWithChildren) {
	const [isSubNavOpen, setIsSubNavOpen] = useState<boolean>(false);
	const { enableScroll, disableScroll } = useManipulateBodyScroll();

	return (
		<SubNavContext.Provider
			value={{
				isSubNavOpen,
				toggleSubNavOpen: (isOpen?: boolean) =>
					setIsSubNavOpen((val) => {
						const newValue = isOpen === undefined ? !val : isOpen;

						if (newValue) {
							disableScroll();
						} else {
							enableScroll();
						}

						return newValue;
					}),
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
