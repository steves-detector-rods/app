import { CartItemsList } from './cart-items-list';
import PageHeader from '../components/runway/page-header';
import { MainPageWrapper } from '../components/shared/main-page-wrapper';

export default function Cart() {
	return (
		<MainPageWrapper>
			<PageHeader>Cart (Work in Progress)</PageHeader>
			<CartItemsList />
		</MainPageWrapper>
	);
}
