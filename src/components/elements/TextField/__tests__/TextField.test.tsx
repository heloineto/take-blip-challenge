import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import TextField from "../TextField";

describe("TextField", () => {
	it("displays label as placeholder", () => {
		render(<TextField label="foo" />);

		const textField = screen.getByPlaceholderText("foo");
		expect(textField).toBeInTheDocument();
	});

	it("is able to receive input", () => {
		render(<TextField label="bar" />);

		const textField: HTMLInputElement = screen.getByPlaceholderText("bar");

		fireEvent.change(textField, { target: { value: "baz" } });
		expect(textField.value).toBe("baz");
	});
});
