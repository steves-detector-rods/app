import { notFound } from 'next/navigation';
import InlineLink from 'src/app/components/runway/inline-link';
import PageHeader from 'src/app/components/runway/page-header';
import { Product, products } from '../../products';

const CustomizeProductWithCommonCustomizations = ({ product }: { product: Product }) => {
	return (
		<>
			<p className="text-lg">
				You&apos;ve identified that you&apos;d like to customize your <b>{product.name}</b>. While we have a list of
				common customizations for this product below, this list is not exhaustive! Here at Steve&apos;s Detector Rods,
				we pride ourselves on customer satisfaction. We handle a wide range of more specific customizations by request.
				Do not hesitate to reach out to me personally at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>. We will always
				do our best to accommodate your specific needs!
			</p>

			<div className="flex flex-col space-y-4">
				<p className="mt-4 text-lg">
					Common customizations for <b>{product.name}</b>
				</p>
				<div>
					<p className="text-md text-gray-500">Length</p>
					<div className="flex items-center  text-lg">
						<input type="checkbox" id="length-customization-sm" className="h-4 w-4" />
						<label htmlFor="length-customization-sm" className="ml-2">
							Small (40&quot;)
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="length-customization-md" className="h-4 w-4" defaultChecked />
						<label htmlFor="length-customization-md" className="ml-2">
							Medium (46&quot;) - <b>Default</b>
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="length-customization-lg" className="h-4 w-4" />
						<label htmlFor="length-customization-lg" className="ml-2">
							Large (56&quot;)
						</label>
					</div>
				</div>
				<div>
					<p className="text-md text-gray-500">Color</p>
					<div className="flex items-center  text-lg">
						<input type="checkbox" id="color-customization-red" className="h-4 w-4" />
						<label htmlFor="color-customization-red" className="ml-2">
							Red
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="color-customization-black" className="h-4 w-4" defaultChecked />
						<label htmlFor="color-customization-black" className="ml-2">
							Black - <b>Default</b>
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="color-customization-green" className="h-4 w-4" />
						<label htmlFor="color-customization-green" className="ml-2">
							Green
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="color-customization-blue" className="h-4 w-4" />
						<label htmlFor="color-customization-blue" className="ml-2">
							Blue
						</label>
					</div>
					<div className="flex items-center text-lg">
						<input type="checkbox" id="color-customization-camouflage" className="h-4 w-4" />
						<label htmlFor="color-customization-camouflage" className="ml-2">
							Camouflage
						</label>
					</div>
				</div>
			</div>
			<div className="flex flex-row mt-8">
				<button
					className="py-2 px-6 bg-gray-100 mr-2 rounded-lg hover:bg-gray-100 
                        transition-colors duration-75"
				>
					Cancel
				</button>
				<button
					className="py-2 px-6 bg-red-700 text-white rounded-lg hover:bg-red-800 
                    transition-colors duration-75"
				>
					Save Changes
				</button>
			</div>
		</>
	);
};

const CustomizeProductGeneral = ({ product }: { product: Product }) => {
	return (
		<div className="flex flex-col items-center">
			<p className="text-lg">
				You&apos;ve identified that you&apos;d like to customize your <b>{product.name}</b>. While this item does not
				have a list of common customizations, don&apos;t worry! Here at Steve&apos;s Detector Rods, we pride ourselves
				on customer satisfaction. We handle a wide range of more specific customizations by request. Do not hesitate to
				reach out to me personally at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>. We will always
				do our best to accommodate your specific needs!
			</p>

			<a
				href="mailto:steve@stevesdetectorrods.com"
				className="rounded-lg bg-red-700 hover:bg-red-800 text-white py-2 px-6 text-xl mt-6"
			>
				Contact Steve
			</a>
		</div>
	);
};

export default function CustomizeProduct({ params }: { params: { 'product-id': string } }) {
	const productId = params['product-id'];

	const product = products[productId];

	if (!product?.customize) notFound();

	return (
		<main>
			<PageHeader>Pre-Purchase Customization</PageHeader>
			{product.customize?.type === 'customizable-custom-options' ? (
				<CustomizeProductWithCommonCustomizations product={product} />
			) : (
				<CustomizeProductGeneral product={product} />
			)}
		</main>
	);
}
