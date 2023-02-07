export const useManipulateBodyScroll = () => {
	return {
		enableScroll: () => {
			document.body.style.overflow = 'visible';
		},
		disableScroll: () => {
			document.body.style.overflow = 'hidden';
		},
	};
};
