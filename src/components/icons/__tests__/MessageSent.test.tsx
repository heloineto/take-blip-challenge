import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MessageSent from "../MessageSent";

describe("MessageSent", () => {
	it("can receive className", () => {
		render(<MessageSent data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
