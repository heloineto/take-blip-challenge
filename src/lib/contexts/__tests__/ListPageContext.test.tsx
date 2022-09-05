import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ComponentProps, ReactElement } from "react";
import { ListPageContext, useListPage } from "../ListPageContext";

// const ListPageProvider = () => {
// 	const [view, setView] = useState<View>("grid");

// 	const [chatbots, setChatbots] = useState<ChatbotType[] | null>([]);
// 	const [untouchedChatbots, setUntouchedChatbots] = useState<
// 		ChatbotType[] | null
// 	>(null);

// 	const [favoriteNames, setFavoriteNames] = useLocalStorage<string[]>(
// 		"favoriteNames",
// 		[]
// 	);

// 	return (
// 		<ListPageContext.Provider
// 			value={{
// 				view,
// 				setView,
// 				chatbots: [],
// 				setChatbots,
// 				untouchedChatbots,
// 				favoriteNames,
// 				setFavoriteNames,
// 			}}
// 		></ListPageContext.Provider>
// 	);
// };

interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
	providerProps: ComponentProps<typeof ListPageContext.Provider>;
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
		// const providerProps = {
		// 	first: "Boba",
		// 	last: "Fett",
		// };
		// customRender(
		// 	<ListPageContext.Consumer>
		// 		{(value) => <span>Received: {value}</span>}
		// 	</ListPageContext.Consumer>,
		// 	{ providerProps }
		// );
		// expect(screen.getByText(/^Received:/).textContent).toBe(
		// 	"Received: Boba Fett"
		// );
	});
});
