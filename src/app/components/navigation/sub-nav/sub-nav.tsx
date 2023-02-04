import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { MdClose } from 'react-icons/md';
import { clsx } from 'src/app/utils/clsx';
import { useSubNavContext } from './sub-nav-context-provider';
import SubNavItem from './sub-nav-item';

function SubNavOptions() {
	return (
		<>
			<SubNavItem href="/">Home</SubNavItem>
			<SubNavItem href="/products">Products</SubNavItem>
			<SubNavItem href="/about">About</SubNavItem>
			<SubNavItem href="/faq">FAQ</SubNavItem>
		</>
	);
}

export default function SubNav() {
	const { isSubNavOpen, toggleSubNavOpen } = useSubNavContext();

	return (
		<>
			<MotionConfig transition={{ type: 'tween', duration: 0.2 }}>
				<AnimatePresence>
					<motion.div
						key={`sub-nav-modal-background-${isSubNavOpen}`}
						initial={{ opacity: 0 }}
						animate={{ opacity: '25%' }}
						exit={{ opacity: 0 }}
						className={clsx('fixed sm:hidden', 'w-full h-full bg-black', isSubNavOpen ? 'flex' : 'hidden')}
						onClick={() => toggleSubNavOpen(false)}
					/>
					<motion.div
						key={`sub-nav-${isSubNavOpen}`}
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						className={clsx('fixed sm:hidden', 'h-full left-0', isSubNavOpen ? 'flex' : 'hidden')}
					>
						<div className="flex flex-col bg-red-800 min-w-[60vw] h-full px-6 py-4 justify-between">
							<div className="flex flex-row justify-between">
								<div className="flex flex-col space-y-2">
									<SubNavOptions />
								</div>
								<button className="mt-2 text-white h-min" onClick={() => toggleSubNavOpen(false)}>
									<MdClose className="w-5 h-5" />
								</button>
							</div>
							<a href="mailto:steve@stevesdetectorrods.com" className="text-white text-start py-2">
								Contact Steve
							</a>
						</div>
					</motion.div>
				</AnimatePresence>
			</MotionConfig>
			<div className={clsx('hidden sm:flex sticky top-[3.75rem]', 'w-full bg-red-800 py-2 justify-center')}>
				<div className="flex flex-row justify-between w-full max-w-6xl px-4 space-x-4">
					<div className="flex space-x-8 flex-row">
						<SubNavOptions />
					</div>
					<p className="hidden md:block text-white">
						<span>Questions? Contact Steve: </span>
						<a href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</a>
					</p>
					<a href="mailto:steve@stevesdetectorrods.com" className="block md:hidden text-white text-start">
						Contact Steve
					</a>
				</div>
			</div>
		</>
	);
}
