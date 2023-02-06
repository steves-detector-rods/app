/* eslint-disable sonarjs/no-duplicate-string */
export type BrandId =
	| 'brand-minelab'
	| 'brand-garrett'
	| 'brand-t-rex'
	| 'brand-stealth'
	| 'brand-xtreme'
	| 'brand-coob'
	| 'brand-stavr';

/**
 * This brands object should eventually become a server call. The type is the return type from the server
 */
export const brands: Readonly<Record<BrandId, { text: string; type: 'metal-detector' | 'sand-scoop-handle' }>> = {
	'brand-minelab': { text: 'Minelab', type: 'metal-detector' },
	'brand-garrett': { text: 'Garrett', type: 'metal-detector' },
	'brand-t-rex': { text: 'T-Rex', type: 'sand-scoop-handle' },
	'brand-stealth': { text: 'Stealth', type: 'sand-scoop-handle' },
	'brand-xtreme': { text: 'Xtreme', type: 'sand-scoop-handle' },
	'brand-coob': { text: 'CooB', type: 'sand-scoop-handle' },
	'brand-stavr': { text: 'Stavr', type: 'sand-scoop-handle' },
} as const;
