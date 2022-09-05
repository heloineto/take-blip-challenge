import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TopBarBlipLogo from "../TopBarBlipLogo";

describe("TopBarBlipLogo", () => {
	it("can receive className", () => {
		render(<TopBarBlipLogo data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
