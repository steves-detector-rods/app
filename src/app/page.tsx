import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div className="w-96 bg-blue-50">
				<Image src="/logo-long.png" alt="Steve's Detector Rods Logo" layout="fill" objectFit="contain" />
			</div>
			<p className="text-xl bg-red">This is some home testing text</p>
		</main>
	);
}
