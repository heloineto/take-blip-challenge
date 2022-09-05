import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import chatbots from "../../../../lib/mocks/chatbots";

import ListPage from "../ListPage";

jest
	.spyOn(global, "fetch")
	.mockImplementation(
		jest.fn(() =>
			Promise.resolve({ json: () => Promise.resolve(chatbots) })
		) as jest.Mock
	);

describe("ListPage", () => {
	it("renders the chatbots list", async () => {
		act(() => {
			render(<ListPage />);
		});

		const heading = await screen.findByText("Favorites");

		expect(heading).toBeInTheDocument();
	});

	it("handle network errors", async () => {
		jest
			.spyOn(global, "fetch")
			.mockImplementationOnce(
				jest.fn(() => Promise.reject("API failure")) as jest.Mock
			);

		act(() => {
			render(<ListPage />);
		});

		const heading = await screen.findByText("Error");

		expect(heading).toBeInTheDocument();
	});
});
