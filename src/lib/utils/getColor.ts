export const hash = (str: string) => {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash = hash & hash;
	}

	return hash;
};

const getColor = (str: string) => {
	const colors = [
		"#55cfff",
		"#2a6880",
		"#fa7e25",
		"#4dcb7b",
		"#f66689",
		"#2cc3d5",
		"#f1e733",
		"#b766f6",
		"#517bf2",
	];

	const color = colors[Math.abs(hash(str) % colors.length)];

	return color;
};

export default getColor;
