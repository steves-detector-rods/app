import { clsx } from 'utils/clsx';
import SubNavItem from './sub-nav-item';

export default function SubNav({ isNavOpen }: { isNavOpen: boolean }) {
	return (
		<div className={clsx('w-full bg-red-800 py-2 justify-center', isNavOpen ? 'flex' : 'hidden sm:flex')}>
			<div className="flex flex-col sm:flex-row justify-between w-full max-w-6xl px-4 sm:space-x-4">
				<div className="flex w-full sm:w-auto space-y-2 sm:space-y-0 sm:space-x-8 flex-col sm:flex-row">
					<SubNavItem href="/">Home</SubNavItem>
					<SubNavItem href="/products">Products</SubNavItem>
					<SubNavItem href="/about">About</SubNavItem>
					<SubNavItem href="/faq">FAQ</SubNavItem>
				</div>
				<p className="hidden md:block text-white">
					<span>Questions? Contact Steve: </span>
					<a href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</a>
				</p>
				<a
					href="mailto:steve@stevesdetectorrods.com"
					className="block md:hidden text-white text-center sm:text-start py-2 sm:py-0"
				>
					Contact Steve
				</a>
			</div>
		</div>
	);
}
