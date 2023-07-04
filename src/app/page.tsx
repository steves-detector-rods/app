import Image from 'next/image';
import { MdOutlineShoppingCart } from 'react-icons/md';
import rollingLandscape from '/public/img/rolling-landscape.png';
import { CtaButton } from './components/runway/cta-button';
import { clsx } from './utils/clsx';

export default function Home() {
	return (
		<main>
			<p className="text-xl bg-red">
				<div className="relative h-[50vh] sm:h-[60vh] ">
					<Image
						src={rollingLandscape}
						placeholder="blur"
						priority
						quality={100}
						alt="Landscape shot of rolling hills"
						fill={true}
						style={{
							objectFit: 'cover',
							objectPosition: 'center',
						}}
					/>
					<div
						className={clsx(
							'absolute flex flex-col w-full h-full max-w-[100vw] sm:max-w-[70%] justify-center',
							'bg-black bg-opacity-20 sm:bg-opacity-0',
							'px-4 lg:px-12 xl:px-20',
						)}
					>
						<h2
							className={clsx(
								'text-center sm:text-start self-center sm:self:start text-3xl',
								'md:text-4xl md:leading-10',
								'lg:text-5xl lg:leading-[3.25rem]',
								'text-white font-normal',
								'my-2 rounded-xl',
							)}
						>
							Your home for <b>premium-quality</b>, custom-made <b>carbon-fiber</b> metal detector rods and shafts
						</h2>
						<CtaButton className="mt-6 sm:mt-8 flex content-center self-center sm:self-start justify-center">
							<MdOutlineShoppingCart className="mt-[0.1875rem]" />
							<span className="ml-2">Shop Now</span>
						</CtaButton>
					</div>
				</div>
			</p>
		</main>
	);
}
