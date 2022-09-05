import divideChatbots from "../divideChatbots";

const chatbots = [
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

describe("divideChatbots", () => {
	const favoriteNames = ["Mike", "Nancy Wheeler", "Jonathan"];

	const expectedFavorites = [
		{
			name: "Mike",
			type: "builder",
			created: "2020-02-21T14:35:44.510Z",
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

	const expectedRest = chatbots.filter(
		({ name }) => !favoriteNames.includes(name)
	);

	it("given `chatbots` and `favoriteNames`, returns two arrays `favorites` and `rest`", () => {
		const { favorites, rest } = divideChatbots(chatbots, favoriteNames);

		expect(favorites.length).toBe(favoriteNames.length);
		expect(favorites.sort()).toEqual(expectedFavorites.sort());

		expect(rest.length).toBe(chatbots.length - favoriteNames.length);

		expect(rest.sort()).toEqual(expectedRest.sort());
	});
});
