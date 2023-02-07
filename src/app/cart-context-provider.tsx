'use client';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Product } from './products/products';

type CartItem = { productId: Product['productId']; quantity: number };

type Cart = {
	items: Record<Product['productId'], CartItem>;
	totalItems: number;
};

const CartContext = createContext<
	| {
			cart: Cart;
			addItemToCart: (itemId: Product['productId']) => void;
			removeItemFromCart: (itemId: Product['productId']) => void;
			removeProductFromCart: (itemId: Product['productId']) => void;
	  }
	| undefined
>(undefined);

export default function CartContextProvider({ children }: PropsWithChildren<{}>) {
	const [cart, setItemsInCart] = useState<Cart>({ items: {}, totalItems: 0 });

	const removeProductFromCart = (itemId: string, oldCart: Cart) => {
		const existingItem = oldCart.items[itemId];
		if (!existingItem) return oldCart;

		return {
			...oldCart,
			items: Object.entries(oldCart.items).reduce<Cart['items']>((acc, [key, value]) => {
				if (key === itemId) return acc;
				acc[key] = value;
				return acc;
			}, {}),
			totalItems: oldCart.totalItems - existingItem.quantity,
		};
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addItemToCart: (itemId) => {
					setItemsInCart((oldCart) => {
						const existingItem = oldCart.items[itemId];

						const newItem = existingItem
							? { ...existingItem, quantity: existingItem.quantity + 1 }
							: { productId: itemId, quantity: 1 };

						return {
							...oldCart,
							items: {
								...oldCart.items,
								[itemId]: newItem,
							},
							totalItems: oldCart.totalItems + 1,
						};
					});
				},
				removeProductFromCart: (itemId: string) => {
					setItemsInCart((oldCart) => {
						return removeProductFromCart(itemId, oldCart);
					});
				},
				removeItemFromCart: (itemId) => {
					setItemsInCart((oldCart) => {
						const existingItem = oldCart.items[itemId];
						if (!existingItem) return oldCart;

						if (existingItem.quantity > 1) {
							return {
								...oldCart,
								items: {
									...oldCart.items,
									[itemId]: {
										...existingItem,
										quantity: existingItem.quantity - 1,
									},
								},
								totalItems: oldCart.totalItems - 1,
							};
						}
						return removeProductFromCart(itemId, oldCart);
					});
				},
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCartContext() {
	const ctx = useContext(CartContext);

	if (!ctx) {
		throw new Error('You must use useCartContext inside of a CartContextProvider component!');
	}

	return ctx;
}
