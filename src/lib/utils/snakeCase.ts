const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

const words = (string: string): string[] => {
	return string.match(reAsciiWord) ?? [];
};

const snakeCase = (string: string) => {
	return words(string.replace(/['\u2019]/g, "")).reduce(
		(result, word, index) => result + (index ? "_" : "") + word.toLowerCase(),
		""
	);
};

export default snakeCase;
