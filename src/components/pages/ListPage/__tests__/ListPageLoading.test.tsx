import "@testing-library/jest-dom";
import { render, RenderOptions, screen } from "@testing-library/react";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { ListPageContext } from "../../../../lib/contexts/ListPageContext";
import chatbots from "../../../../lib/mocks/chatbots";
import ListPageLoading from "../ListPageLoading";

export const renderWithListPageCtx = (
	ui: ReactElement,
	renderOptions?: Omit<RenderOptions, "queries">
) => {
	return render(
		<BrowserRouter>
			<ListPageContext.Provider
				value={{
					chatbots,
					favoriteNames: [],
					untouchedChatbots: chatbots,
					view: "grid",
					setChatbots: jest.fn(),
					setFavoriteNames: jest.fn(),
					setView: jest.fn(),
				}}
			>
				{ui}
			</ListPageContext.Provider>
		</BrowserRouter>,
		renderOptions
	);
};

describe("ListPageLoading", () => {
	it("renders", () => {
		renderWithListPageCtx(<ListPageLoading />);
	});

	it("renders static structure", () => {
		renderWithListPageCtx(<ListPageLoading />);

		expect(screen.getByText("My chatbots")).toBeInTheDocument();
		expect(screen.getByText("Order by name")).toBeInTheDocument();
		expect(screen.getByText("Order by creation")).toBeInTheDocument();
		expect(screen.getByText("Favorites")).toBeInTheDocument();
	});
});
