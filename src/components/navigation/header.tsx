import Image from 'next/image';

export default function Header() {
	return (
		<div className="justify-center items-center px-4 lg:px-32 xl:px-64 py-4">
			<a href="/">
				<Image src="/logo-long.png" alt="Steve's Detector Rods Logo" width={417} height={30} className="aspect-auto" />
			</a>
		</div>
	);
}
