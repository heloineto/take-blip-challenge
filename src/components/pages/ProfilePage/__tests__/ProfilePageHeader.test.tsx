import "@testing-library/jest-dom";
import ProfilePageHeader from "../ProfilePageHeader";
import { renderWithProfilePageCtx } from "./ProfilePageCards.test";

describe("ProfilePageHeader", () => {
	it("renders", () => {
		renderWithProfilePageCtx(<ProfilePageHeader />);
	});
});
