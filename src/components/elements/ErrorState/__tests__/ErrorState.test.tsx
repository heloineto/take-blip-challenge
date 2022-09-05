import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import ErrorState from "../ErrorState";

const mockFn = jest.fn();

describe("ErrorState", () => {
	it("calls retry function", () => {
		render(<ErrorState onRetry={mockFn} />);

		const retryButton = screen.getByText("Try again");
		fireEvent.click(retryButton);

		expect(mockFn).toBeCalled();
	});
});
