import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import User from "../User";

describe("User", () => {
	it("can receive className", () => {
		render(<User data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
