import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useCartContext } from 'src/app/cart-context-provider';
import { useSubNavContext } from './sub-nav/sub-nav-context-provider';

export default function Header() {
	const { toggleSubNavOpen } = useSubNavContext();
	const {
		cart: { totalItems },
	} = useCartContext();

	return (
		<div className="sticky top-0 justify-center w-full max-w-6xl px-4 py-4 border-b-2 sm:border-b-0 bg-white">
			<div className="flex items-center justify-between">
				<div className="flex flex-row items-center space-x-2 sm:space-x-0">
					<button className="inline sm:hidden" onClick={() => toggleSubNavOpen()}>
						<HiBars3 className="h-6 w-6" />
					</button>
					<a className="flex h-7 w-full" href="/">
						<Image
							src="/logo-long.png"
							alt="Steve's Detector Rods Logo"
							width={417}
							height={30}
							style={{ objectFit: 'contain', objectPosition: 'left center', width: 'auto', height: 'auto' }}
							priority
						/>
					</a>
				</div>
				<Link href="/cart" className="ml-2 text-black hover:text-gray-700 transition-colors duration-75 relative">
					{totalItems ? (
						<motion.div
							key={`cart-with-${totalItems}-items`}
							className="absolute right-[-0.5rem] top-[-0.5rem] h-5 w-5 text-center
									bg-red-700 text-white rounded-full text-sm"
							initial={{ scale: 1.5, rotateZ: 15 }}
							animate={{ scale: 1, rotateZ: 0 }}
							transition={{
								type: 'tween',
								duration: 0.5,
							}}
						>
							{totalItems}
						</motion.div>
					) : null}
					<MdOutlineShoppingCart className="h-6 w-6 sm:h-7 sm:w-7" />
				</Link>
			</div>
		</div>
	);
}
