import "@testing-library/jest-dom";
import ListPageHeader from "../ListPageHeader";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageHeader", () => {
	it("renders", () => {
		renderWithListPageCtx(<ListPageHeader />);
	});
});
