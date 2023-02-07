'use client';
import { FC } from 'react';
import { useCartContext } from '../cart-context-provider';
import InlineLink from '../components/runway/inline-link';
import { products } from '../products/products';

export const CartItemsList: FC = () => {
	const { cart, removeItemFromCart, removeProductFromCart } = useCartContext();

	const items = Object.entries(cart.items);

	if (items.length === 0) {
		return (
			<p className="text-center text-lg italic">
				Looks like your cart is empty! Go back to{' '}
				<InlineLink href="/products">browse all of our products here</InlineLink>.
			</p>
		);
	}

	return (
		<>
			{items.map(([key, item]) => (
				<div key={key} className="mt-4">
					<p>
						<b>{products[item.productId]?.name}</b>
					</p>
					<div className="flex flex-row gap-2 items-center">
						<p>
							<span>Quantity </span>
							{item.quantity}
						</p>
						<button className="px-6 py-2 bg-gray-200 rounded-lg" onClick={() => removeItemFromCart(item.productId)}>
							Remove one
						</button>
						<button className="px-6 py-2 bg-gray-200 rounded-lg" onClick={() => removeProductFromCart(item.productId)}>
							Remove All
						</button>
					</div>
				</div>
			))}
		</>
	);
};
