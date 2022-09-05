import "@testing-library/jest-dom";
import { render, RenderOptions, screen } from "@testing-library/react";
import { ComponentProps, ReactElement } from "react";
import chatbots from "../../mocks/chatbots";
import { ListPageContext, useListPage } from "../ListPageContext";

type ProviderProps = ComponentProps<typeof ListPageContext.Provider>;
interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
	providerProps: ProviderProps;
}

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
