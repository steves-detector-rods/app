export const filterKeyFromObject = <T>(obj: Record<string, T>, key: string) => {
	return Object.keys(obj)
		.filter((keyItem) => keyItem !== key)
		.reduce<Record<string, T>>((acc, keyItem) => {
			const value = obj[keyItem];
			if (!value) return acc;

			acc[keyItem] = value;
			return acc;
		}, {});
};
