import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Add from "../Add";

describe("Add", () => {
	it("can receive className", () => {
		render(<Add data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
