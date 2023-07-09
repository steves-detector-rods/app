// eslint-disable-next-line import/no-extraneous-dependencies
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/app/**/*.tsx', './src/pages/**/*.tsx', './src/components/**/*.tsx', './src/domains/**/*.tsx'],
	mode: 'jit',
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'grid-cols-auto-fill-min': (value) => ({
						gridTemplateColumns: `repeat(auto-fill, minmax(${value}, 1fr))`,
					}),
				},
				{ values: theme('width') },
			);
		}),
	],
};
