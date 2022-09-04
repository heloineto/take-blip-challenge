const BASE_URL = "https://front-end-test.beta-cs.blip.ai";

export const getChatbots = async () => {
	const response = await fetch(`${BASE_URL}/bots`, {
		headers: { Accept: "*/*" },
	});

	const data = await response.json();

	return data;
};

export const getChatbotProfile = async (shortName: string) => {
	const response = await fetch(`${BASE_URL}/${shortName}/details`, {
		headers: { Accept: "*/*" },
	});

	const data = await response.json();

	return data;
};
