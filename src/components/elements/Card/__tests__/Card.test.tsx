import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
	it("renders children", () => {
		render(<Card>foo</Card>);

		const child = screen.getByText("foo");
		expect(child).toBeInTheDocument();
	});
});
