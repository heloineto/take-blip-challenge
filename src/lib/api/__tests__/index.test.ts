import { getChatbotProfile, getChatbots } from "..";
import chatbots from "../../mocks/chatbots";
import profile from "../../mocks/profile";

describe("getChatbots", () => {
	const expectedChatbots = chatbots;

	it("returns chatbots", async () => {
		const chatbots = await getChatbots();

		expect(chatbots).toMatchObject(expectedChatbots);
	});
});

describe("getChatbotProfile", () => {
	const expectedProfile = profile;

	it("returns a chatbot profile", async () => {
		const profile = await getChatbotProfile("eleven");

		expect(profile).toMatchObject(expectedProfile);
	});
});
