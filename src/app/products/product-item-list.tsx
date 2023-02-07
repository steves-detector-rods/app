'use client';
/* eslint-disable sonarjs/no-duplicate-string */
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCartContext } from '../cart-context-provider';

type ProductInStock = { type: 'in-stock'; quantity: number };

type ProductLimitedStock = { type: 'limited' };

type ProductOutOfStockWithWaitList = { allowWaitList: true; waitListId: string };

type ProductOutOfStockWithNoWaitList = { allowWaitList: false };

type ProductOutOfStock = { type: 'out-of-stock' } & (ProductOutOfStockWithWaitList | ProductOutOfStockWithNoWaitList);

type ProductStock = ProductLimitedStock | ProductInStock | ProductOutOfStock;

const ProductStockItem: FC<{ stock: ProductStock }> = ({ stock }) => {
	if (stock.type === 'limited')
		return <p className="text-md text-red-600 italic font-bold">Limited stock remaining!</p>;

	if (stock.type === 'in-stock') {
		return (
			<p className="text-md">
				{stock.quantity < 5 ? (
					<span className="text-red-700 italic">Only {stock.quantity} remaining!</span>
				) : (
					`${stock.quantity} in stock now!`
				)}
			</p>
		);
	}

	if (stock.type === 'out-of-stock') {
		return <p className="text-md italic">Out of Stock</p>;
	}

	return <></>;
};

type ProductItem = {
	productId: string;
	brandName: string;
	name: string;
	image: { src: string; width: number; height: number; alt: string };
	stock?: ProductStock;
	isCustomizable?: boolean;
	basePrice: `${number}.${number}`;
	discountPrice?: `${number}.${number}`;
};

export const Product: FC<ProductItem> = ({
	brandName,
	name,
	image,
	stock,
	isCustomizable = false,
	productId,
	basePrice,
}) => {
	const isPurchaseDisabled = stock?.type === 'out-of-stock';
	const { addItemToCart } = useCartContext();

	return (
		<div className="flex flex-col h-full justify-between">
			<div className="flex flex-col">
				<Image
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
					style={{ objectFit: 'contain', objectPosition: 'center', width: 'auto', height: 'auto' }}
				/>
				<p className="text-lg font-medium text-gray-700 mt-4">{name}</p>
				<p className="text-md font-medium text-gray-500">{brandName}</p>
				{stock ? <ProductStockItem stock={stock} /> : null}
				<p className="text-lg">${basePrice}</p>
			</div>
			<div className="flex flex-col sm:flex-row w-full mt-4 gap-2">
				{isCustomizable ? (
					<Link
						href={`/products/${productId}/customize`}
						className="flex-1 bg-gray-200 py-2 px-4 rounded-lg text-center
									hover:bg-gray-300 
                                    transition-colors duration-75"
					>
						Customize
					</Link>
				) : null}
				{stock?.type === 'out-of-stock' && stock?.allowWaitList ? (
					<button
						className="w-full bg-red-700 text-white py-2 px-4 rounded-lg 
                                    hover:bg-red-800"
					>
						Join Wait List
					</button>
				) : (
					<button
						className="flex-1 bg-red-700 text-white py-2 px-4 rounded-lg 
                                    hover:bg-red-800 
                                    transition-colors duration-75
                                    disabled:bg-red-300 disabled:cursor-not-allowed disabled:text-gray-50"
						disabled={isPurchaseDisabled}
						onClick={() => addItemToCart(productId)}
					>
						Add to Cart
					</button>
				)}
			</div>
		</div>
	);
};

export const ProductItemList: FC<{ products: ProductItem[] }> = ({ products }) => (
	<div className="w-full grid grid-cols-2 lg:grid-cols-3 grid-flow-row gap-6">
		{products.map((product) => (
			<Product
				key={product.productId}
				productId={product.productId}
				brandName={product.brandName}
				image={product.image}
				name={product.name}
				stock={product.stock}
				isCustomizable={product.isCustomizable}
				basePrice={product.basePrice}
				discountPrice={product.discountPrice}
			/>
		))}
	</div>
);
