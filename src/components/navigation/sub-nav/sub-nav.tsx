import SubNavItem from './sub-nav-item';

export default function SubNav() {
	return (
		<div className="w-full bg-red-800 px-4 lg:px-32 xl:px-64 py-2 space-x-8">
			<SubNavItem href="/">Home</SubNavItem>
			<SubNavItem href="/products">Products</SubNavItem>
			<SubNavItem href="/about">About</SubNavItem>
			<SubNavItem href="/blog">Blog</SubNavItem>
		</div>
	);
}
