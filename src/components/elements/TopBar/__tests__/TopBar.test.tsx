import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TopBar from "../TopBar";

describe("TopBar", () => {
	it("can receive className", () => {
		render(
			<BrowserRouter>
				<TopBar />
			</BrowserRouter>
		);

		const topBar = screen.getByRole("navigation");
		expect(topBar).toBeInTheDocument();
	});
});
