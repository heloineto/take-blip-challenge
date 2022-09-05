import { ChatbotProfile, ChatbotType } from "../../@types/chatbots";

const BASE_URL = "https://front-end-test.beta-cs.blip.ai";

export const getChatbots = async () => {
	const response = await fetch(`${BASE_URL}/bots`, {
		headers: { Accept: "*/*" },
	});

	const data = (await response.json()) as ChatbotType[];

	return data;
};

export const getChatbotProfile = async (shortName: string) => {
	const response = await fetch(`${BASE_URL}/${shortName}/details`, {
		headers: { Accept: "*/*" },
	});

	const data = (await response.json()) as ChatbotProfile;

	return data;
};
