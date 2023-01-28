import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div className="w-96 bg-blue-50">
				<Image src="/logo-long.png" alt="Steve's Detector Rods Logo" width={200} height={175} />
			</div>
			<p className="text-xl bg-red">Testing my home page</p>
		</main>
	);
}
