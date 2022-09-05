import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OrganizeGrid from "../OrganizeGrid";

describe("OrganizeGrid", () => {
	it("can receive className", () => {
		render(<OrganizeGrid data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
