import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ChatbotLoading from "../ChatbotLoading";

describe("ChatbotLoading", () => {
	it("can receives classNames", () => {
		render(<ChatbotLoading data-testid="baz" className="foo" />);

		const loadingElement = screen.getByTestId("baz");

		expect(loadingElement).toHaveClass("foo");
	});
});
