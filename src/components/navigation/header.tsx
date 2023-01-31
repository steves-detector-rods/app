import Image from 'next/image';
import { HiBars3 } from 'react-icons/hi2';

export default function Header({ onHamburgerClick = () => {} }: { onHamburgerClick?: () => void }) {
	return (
		<div className="justify-center w-full max-w-6xl px-4 py-4 border-b-2 sm:border-b-0">
			<div className="flex flex-row items-center space-x-2 sm:space-x-0">
				<button className="inline sm:hidden" onClick={onHamburgerClick}>
					<HiBars3 className="h-7 w-7" />
				</button>
				<a href="/">
					<Image
						src="/logo-long.png"
						alt="Steve's Detector Rods Logo"
						width={389}
						height={28}
						className="aspect-auto"
					/>
				</a>
			</div>
		</div>
	);
}
