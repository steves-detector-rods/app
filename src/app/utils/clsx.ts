type ClassInput = string | Record<string, boolean> | string[] | null | undefined | ((classes: string) => ClassInput);

export function clsx(...classes: ClassInput[]): string {
	return classes.reduce<string>((acc, val) => {
		if (!val) {
			return acc;
		}
		if (typeof val === 'string') {
			return acc ? `${acc} ${val}` : val;
		}
		if (Array.isArray(val)) {
			return acc ? `${acc} ${val.join(' ')}` : val.join(' ');
		}
		if (typeof val === 'function') {
			return acc ? `${acc} ${clsx(val(acc))}` : clsx(val(acc));
		}
		return Object.entries(val).reduce<string>(
			(prevVal, [className, test]) => (test ? `${prevVal} ${className}` : prevVal),
			acc,
		);
	}, '');
}
