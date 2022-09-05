import "@testing-library/jest-dom";
import { fireEvent, screen } from "@testing-library/react";
import chatbots from "../../../../lib/mocks/chatbots";
import ListPageHeader, { sortByCreation, sortByName } from "../ListPageHeader";
import { renderWithListPageCtx } from "./ListPageLoading.test";

describe("ListPageHeader", () => {
	it("renders the view buttons", () => {
		renderWithListPageCtx(<ListPageHeader />);

		const orderByNameButton = screen.getByText("Order by name");
		const orderByCreationButton = screen.getByText("Order by creation");

		fireEvent.click(orderByNameButton);
		fireEvent.click(orderByCreationButton);
	});

	it("renders the search bar", () => {
		renderWithListPageCtx(<ListPageHeader />);

		const search = screen.getByPlaceholderText("Search");

		expect(search).toBeInTheDocument();
	});
});

describe("sortByName", () => {
	it("sorts chatbots by name", () => {
		const sorted = sortByName(chatbots);

		expect(sorted).toEqual([
			{
				name: "Billy Hargrove",
				type: "router",
				created: "2020-01-01T14:35:44.510Z",
			},
			{
				name: "Dustin Henderson",
				type: "builder",
				created: "2020-03-21T14:35:44.510Z",
			},
			{
				name: "Eleven",
				type: "router",
				created: "2020-01-31T14:35:44.510Z",
			},
			{
				name: "Jonathan",
				type: "builder",
				created: "2020-03-31T14:35:44.510Z",
			},
			{ name: "Max", type: "builder", created: "2020-01-11T14:35:44.510Z" },
			{
				name: "Mike",
				type: "builder",
				created: "2020-02-21T14:35:44.510Z",
			},
			{
				name: "Nancy Wheeler",
				type: "builder",
				created: "2020-05-31T14:35:44.510Z",
			},
			{
				name: "Steve Harrington",
				type: "builder",
				created: "2020-01-11T14:35:44.510Z",
			},
			{
				name: "Suzie",
				type: "builder",
				created: "2020-01-01T14:35:44.510Z",
			},
		]);
	});
});

describe("sortByCreation", () => {
	it("sorts chatbots by name", () => {
		const sorted = sortByCreation(chatbots);

		expect(sorted).toEqual([
			{
				name: "Nancy Wheeler",
				type: "builder",
				created: "2020-05-31T14:35:44.510Z",
			},
			{
				name: "Jonathan",
				type: "builder",
				created: "2020-03-31T14:35:44.510Z",
			},
			{
				name: "Dustin Henderson",
				type: "builder",
				created: "2020-03-21T14:35:44.510Z",
			},
			{
				name: "Mike",
				type: "builder",
				created: "2020-02-21T14:35:44.510Z",
			},
			{
				name: "Eleven",
				type: "router",
				created: "2020-01-31T14:35:44.510Z",
			},
			{ name: "Max", type: "builder", created: "2020-01-11T14:35:44.510Z" },
			{
				name: "Steve Harrington",
				type: "builder",
				created: "2020-01-11T14:35:44.510Z",
			},
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
		]);
	});
});
