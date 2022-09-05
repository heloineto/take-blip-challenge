import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import OrganizeList from "../OrganizeList";

describe("OrganizeList", () => {
	it("can receive className", () => {
		render(<OrganizeList data-testid="foo" className="bar" />);

		const icon = screen.getByTestId("foo");
		expect(icon).toHaveClass("bar");
	});
});
