import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Chatbot from "../Chatbot";

describe("Chatbot", () => {
	const chatbot = {
		name: "Mike",
		type: "builder",
		created: "2020-02-21T14:35:44.510Z",
	};

	it('will render ChatbotCard if `variant="card"`', () => {
		render(
			<BrowserRouter>
				<Chatbot
					variant="card"
					chatbot={chatbot}
					onChangeFavorite={jest.fn()}
				/>
			</BrowserRouter>
		);

		const colElement = screen.getByTestId("chatbot-card");

		expect(colElement).not.toBeNull();
		expect(colElement.classList.contains("flex-col")).toBe(true);
	});

	it('will render ChatbotRow if `variant="row"`', () => {
		render(
			<BrowserRouter>
				<Chatbot variant="row" chatbot={chatbot} onChangeFavorite={jest.fn()} />
			</BrowserRouter>
		);

		const rowElement = screen.getByTestId("chatbot-row");

		expect(rowElement).not.toBeNull();
		expect(rowElement.classList.contains("flex-row")).toBe(true);
	});
});
