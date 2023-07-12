import { Metadata } from 'next';
import { CartItemsList } from './cart-items-list';
import PageHeader from '../components/runway/page-header';
import { MainSectionWrapper } from '../components/runway/section-wrapper';

export default function Cart() {
	return (
		<MainSectionWrapper>
			<PageHeader>Cart (Work in Progress)</PageHeader>
			<CartItemsList />
		</MainSectionWrapper>
	);
}

export const metadata: Metadata = {
	title: "Steve's Detector Rods | Cart",
};
