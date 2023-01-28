/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/app/**/*.tsx', './src/pages/**/*.tsx', './src/components/**/*.tsx', './src/domains/**/*.tsx'],
	mode: 'jit',
	theme: {
		extend: {},
	},
	plugins: [],
};
