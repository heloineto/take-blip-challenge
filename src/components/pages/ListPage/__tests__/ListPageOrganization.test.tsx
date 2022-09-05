import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import ListPageOrganization from "../ListPageOrganization";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageOrganization", () => {
	it("renders grid view button", () => {
		renderWithListPageCtx(<ListPageOrganization />);

		const gridViewButton = screen.getByTestId("grid-view");

		expect(gridViewButton).toBeInTheDocument();

		fireEvent.click(gridViewButton);
	});

	it("renders list view button", () => {
		renderWithListPageCtx(<ListPageOrganization />);

		const listViewButton = screen.getByTestId("list-view");

		expect(listViewButton).toBeInTheDocument();

		fireEvent.click(listViewButton);
	});
});
