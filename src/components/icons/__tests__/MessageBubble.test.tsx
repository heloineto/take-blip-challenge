import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MessageBubble from "../MessageBubble";

describe("MessageBubble", () => {
	it("can receive className", () => {
		render(<MessageBubble data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
