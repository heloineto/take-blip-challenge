import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
	it("will properly render children", () => {
		render(<Button>Click me</Button>);

		const button = screen.getByText("Click me");

		expect(button).toBeInTheDocument();
	});
});
