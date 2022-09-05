import "@testing-library/jest-dom";
import ListPageListView from "../ListPageListView";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageLoading", () => {
	it("renders", () => {
		renderWithListPageCtx(<ListPageListView />);
	});
});
