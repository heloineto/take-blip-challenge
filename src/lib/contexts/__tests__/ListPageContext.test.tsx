import "@testing-library/jest-dom";
import { render, RenderOptions, screen } from "@testing-library/react";
import { ComponentProps, ReactElement } from "react";
import { ListPageContext, useListPage } from "../ListPageContext";

type ProviderProps = ComponentProps<typeof ListPageContext.Provider>;
interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
	providerProps: ProviderProps;
}

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

const customRender = (
	ui: ReactElement,
	{ providerProps, ...renderOptions }: CustomRenderOptions
) => {
	return render(
		<ListPageContext.Provider {...providerProps}>
			{ui}
		</ListPageContext.Provider>,
		renderOptions
	);
};

const ListPageConsumer = () => {
	const context = useListPage();

	return <span>Received: {JSON.stringify(context)}</span>;
};

describe("ListPageContext", () => {
	it("should throw an error if called outside a provider", () => {
		expect(() => render(<ListPageConsumer />)).toThrow(
			"`ListPageContext` is undefined. did you call `useListPage` outside a provider?"
		);
	});

	it("passes down context to consumers", () => {
		const providerProps: ProviderProps = {
			value: {
				chatbots,
				favoriteNames: [],
				untouchedChatbots: chatbots,
				view: "grid",
				setChatbots: jest.fn(),
				setFavoriteNames: jest.fn(),
				setView: jest.fn(),
			},
		};

		customRender(
			<ListPageContext.Consumer>
				{(value) => (
					<span data-testid="span">{`${JSON.stringify(value)}`}</span>
				)}
			</ListPageContext.Consumer>,
			{ providerProps }
		);

		const spanElement = screen.getByTestId("span");

		const json = JSON.parse(
			spanElement.textContent ?? ""
		) as ProviderProps["value"];

		expect(json).toEqual(JSON.parse(JSON.stringify(providerProps.value)));
	});
});
