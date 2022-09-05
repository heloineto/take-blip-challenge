import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ActionButton from "../ActionButton";

describe("ActionButton", () => {
	it("can receive props", () => {
		render(<ActionButton className="buttonClass" />);

		const button = screen.getByRole("button");

		expect(button).toHaveClass("buttonClass");
	});
});
