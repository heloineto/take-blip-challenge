import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import ListPage from "..";

describe("ListPage", () => {
	it("renders", () => {
		render(<ListPage />);
	});
});
