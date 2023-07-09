import { notFound } from 'next/navigation';
import InlineLink from 'src/app/components/runway/inline-link';
import PageHeader from 'src/app/components/runway/page-header';
import { MainSectionWrapper } from 'src/app/components/runway/section-wrapper';
import { Product, ProductCustomizationCommonOptions, products } from '../../products';

const CustomizeProductWithCommonCustomizations = ({
	commonCustomizations,
	name,
}: {
	commonCustomizations: ProductCustomizationCommonOptions;
	name: Product['name'];
}) => {
	return (
		<>
			<p className="text-lg">
				You&apos;ve identified that you&apos;d like to customize your <b>{name}</b>. While we have a list of common
				customizations for this product below, this list is not exhaustive! Here at Steve&apos;s Detector Rods, we pride
				ourselves on customer satisfaction. We handle a wide range of more specific customizations by request. Do not
				hesitate to reach out to me personally at{' '}
				<InlineLink href="mailto:steve@stevesdetectorrods.com">steve@stevesdetectorrods.com</InlineLink>. We will always
				do our best to accommodate your specific needs!
			</p>

			<div className="flex flex-col space-y-4">
				<p className="mt-4 text-lg">
					Common customizations for <b>{name}</b>
				</p>
				{commonCustomizations.customizationOptions.map((customization) => (
					<div key={`customization-section-${customization.label}`}>
						<p className="text-md text-gray-500">{customization.label}</p>
						{customization.options.map((cust) => (
							<div
								key={`customization-section-${customization.label}-option-${cust.value}`}
								className="flex items-center text-lg"
							>
								<input type="checkbox" id={cust.value} className="h-4 w-4" defaultChecked={cust.isDefault} />
								<label htmlFor={cust.value} className="ml-2">
									<span>{cust.text}</span>{' '}
									{cust.isDefault ? <span className="italic font-semibold"> - Default</span> : null}
								</label>
							</div>
						))}
					</div>
				))}
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

	const { customize } = product;

	return (
		<MainSectionWrapper>
			<PageHeader>Pre-Purchase Customization</PageHeader>
			{customize.type === 'customizable-custom-options' ? (
				<CustomizeProductWithCommonCustomizations commonCustomizations={customize} name={product.name} />
			) : (
				<CustomizeProductGeneral product={product} />
			)}
		</MainSectionWrapper>
	);
}
