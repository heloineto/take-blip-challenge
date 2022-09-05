import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MessageReceived from "../MessageReceived";

describe("MessageReceived", () => {
	it("can receive className", () => {
		render(<MessageReceived data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
