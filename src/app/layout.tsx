import { Metadata } from 'next';
import CartContextProvider from './cart-context-provider';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head />
			<body>
				<CartContextProvider>{children}</CartContextProvider>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
};
