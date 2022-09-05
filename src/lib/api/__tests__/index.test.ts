import { getChatbotProfile, getChatbots } from "..";

describe("getChatbots", () => {
	const expectedChatbots = [
		{
			name: "Billy Hargrove",
			type: "router",
			created: "2020-01-01T14:35:44.510Z",
		},
		{
			name: "Suzie",
			type: "builder",
			created: "2020-01-01T14:35:44.510Z",
		},
		{
			name: "Steve Harrington",
			type: "builder",
			created: "2020-01-11T14:35:44.510Z",
		},
		{
			name: "Max",
			type: "builder",
			created: "2020-01-11T14:35:44.510Z",
		},
		{
			name: "Eleven",
			type: "router",
			created: "2020-01-31T14:35:44.510Z",
		},
		{
			name: "Mike",
			type: "builder",
			created: "2020-02-21T14:35:44.510Z",
		},
		{
			name: "Dustin Henderson",
			type: "builder",
			created: "2020-03-21T14:35:44.510Z",
		},
		{
			name: "Jonathan",
			type: "builder",
			created: "2020-03-31T14:35:44.510Z",
		},
		{
			name: "Nancy Wheeler",
			type: "builder",
			created: "2020-05-31T14:35:44.510Z",
		},
	];

	it("returns chatbots", async () => {
		const chatbots = await getChatbots();

		expect(chatbots).toMatchObject(expectedChatbots);
	});
});

describe("getChatbotProfile", () => {
	const expectedProfile = {
		shortName: "eleven",
		description:
			"Onze, codinome de Jane Hopper, é uma das personagens principais da série de televisão Stranger Things da Netflix. Ela é interpretada por Millie Bobby Brown.",
		image:
			"data:image/jpeg;base64,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",
		updated: "2020-01-31T14:35:44.510Z",
		culture: "pt-BR",
		analytics: {
			user: {
				total: 100,
				actived: 2,
			},
			message: {
				received: 10000,
				sent: 10001,
			},
		},
		name: "Eleven",
		type: "router",
		created: "2020-01-31T14:35:44.510Z",
	};

	it("returns a chatbot profile", async () => {
		const profile = await getChatbotProfile("eleven");

		expect(profile).toMatchObject(expectedProfile);
	});
});