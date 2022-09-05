import "@testing-library/jest-dom";
import ListPageGridView from "../ListPageGridView";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageLoading", () => {
	it("renders", () => {
		renderWithListPageCtx(<ListPageGridView />);
	});
});
