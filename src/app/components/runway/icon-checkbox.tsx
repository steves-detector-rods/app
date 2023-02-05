import { ReactNode } from 'react';

type CustomIcon = {
	on: ReactNode;
	off?: ReactNode;
};

export default function IconCheckbox({
	valueKey,
	text,
	value,
	icon,
}: {
	valueKey: string;
	value: boolean;
	icon: { base: CustomIcon; contrast?: CustomIcon };
	text?: string;
}) {
	const generatedKey = `filter-list-checkbox-${valueKey}`;

	return (
		<span className="group flex items-center">
			<input type="checkbox" id={generatedKey} value={String(value)} className="hidden" checked={value} readOnly />
			<label htmlFor={generatedKey} className="hidden contrast-more:block">
				{value ? icon.base.on : icon.base.off}
			</label>
			{icon.contrast ? (
				<label htmlFor={generatedKey} className="contrast-more:hidden">
					{value ? icon.contrast.on : icon.contrast.off}
				</label>
			) : null}
			{text ? (
				<label htmlFor={generatedKey} className="ml-3">
					{text}
				</label>
			) : undefined}
		</span>
	);
}
