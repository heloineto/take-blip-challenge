import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatbotStar from "../ChatbotStar";

describe("ChatbotStar", () => {
	it("renders with yellow fill if favorite", () => {
		render(<ChatbotStar data-testid="baz" favorite />);

		const chatbotStar = screen.getByTestId("baz");
		const path = chatbotStar.querySelector("path");
		expect(path?.getAttribute("fill")).toBe("#F9B42F");
	});

	it("renders with outline if not favorite", () => {
		render(<ChatbotStar data-testid="baz" favorite={false} />);

		const chatbotStar = screen.getByTestId("baz");
		const path = chatbotStar.querySelector("path");

		expect(path?.getAttribute("fill")).not.toBe("#F9B42F");

		expect(path?.getAttribute("stroke")).toBe("#B9CBD3");
		expect(path?.getAttribute("stroke-width")).toBe("1.5");
	});
});
