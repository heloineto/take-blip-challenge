import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ChatbotCard from "../ChatbotCard";

describe("ChatbotCard", () => {
	const chatbot = {
		name: "Mike",
		type: "builder",
		created: "2020-02-21T14:35:44.510Z",
	};

	const mockFn = jest.fn();

	beforeEach(() => {
		render(
			<BrowserRouter>
				<ChatbotCard
					data-testid="foo"
					className="bar"
					chatbot={chatbot}
					onChangeFavorite={mockFn}
				/>
			</BrowserRouter>
		);
	});

	it("can receive className", () => {
		const card = screen.getByTestId("foo");
		expect(card).toHaveClass("bar");
	});

	it("star button is clickable", () => {
		const star = screen.getByTestId("star-button");

		fireEvent.click(star);

		expect(mockFn.mock.calls.length).toBe(1);
	});

	it("will render children as a column", () => {
		const colElement = screen.getByTestId("chatbot-card");

		expect(colElement).not.toBeNull();
		expect(colElement.classList.contains("flex-col")).toBe(true);
	});
});
