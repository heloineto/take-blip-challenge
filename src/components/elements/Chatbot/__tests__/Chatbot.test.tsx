import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Chatbot from "../Chatbot";

describe("Chatbot", () => {
	const chatbot = {
		name: "Mike",
		type: "builder",
		created: "2020-02-21T14:35:44.510Z",
	};

	it('will render ChatbotCard if `variant="card"`', () => {
		render(
			<Chatbot variant="card" chatbot={chatbot} onChangeFavorite={jest.fn()} />
		);

		const rowElement = document.querySelector("div.relative");

		expect(rowElement).not.toBeNull();
		expect(rowElement?.classList.contains("flex-row")).toBe(true);
	});

	it('will render ChatbotRow if `variant="row"`', () => {
		render(
			<Chatbot variant="row" chatbot={chatbot} onChangeFavorite={jest.fn()} />
		);

		const colElement = document.querySelector("div.flex");

		expect(colElement).not.toBeNull();
		expect(colElement?.classList.contains("flex-col")).toBe(true);
	});
});
