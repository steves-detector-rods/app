import { Metadata } from 'next';
import PageHeader from '../components/runway/page-header';
import { MainSectionWrapper } from '../components/runway/section-wrapper';

export default function Checkout() {
	return (
		<MainSectionWrapper>
			<PageHeader>Checkout</PageHeader>
		</MainSectionWrapper>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | Checkout",
};
