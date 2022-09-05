import "@testing-library/jest-dom";
import ListPageListView from "../ListPageListView";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageLoading", () => {
	it("renders a list of chatbots", () => {
		renderWithListPageCtx(<ListPageListView />);
	});
});
