import { ChatbotType } from "../../../../@types/chatbots";

const divideChatbots = (chatbots: ChatbotType[], favoriteNames: string[]) => {
	const favorites = [];
	const rest = [];

	for (const chatbot of chatbots) {
		if (favoriteNames.includes(chatbot.name)) {
			favorites.push(chatbot);
		} else {
			rest.push(chatbot);
		}
	}

	return { favorites, rest };
};

export default divideChatbots;
