import "@testing-library/jest-dom";
import ListPageOrganization from "../ListPageOrganization";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageOrganization", () => {
	it("renders", () => {
		renderWithListPageCtx(<ListPageOrganization />);
	});
});
