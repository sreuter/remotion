export type Scale = number;

let currentScale: Scale;

export const setScale = (newScale: Scale) => {
	if (typeof newScale !== 'number') {
		throw new Error('--scale flag must be a number.');
	}

	currentScale = newScale;
};

export const getScale = () => {
	return currentScale;
};
