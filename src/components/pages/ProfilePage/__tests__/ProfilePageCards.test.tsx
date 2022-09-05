import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import { ProfilePageContext } from "../../../../lib/contexts/ProfilePageContext";
import profile from "../../../../lib/mocks/profile";
import ProfilePageCards from "../ProfilePageCards";

export const renderWithProfilePageCtx = (
	ui: ReactElement,
	renderOptions?: Omit<RenderOptions, "queries">
) => {
	return render(
		<ProfilePageContext.Provider
			value={{
				profile,
				setProfile: jest.fn(),
			}}
		>
			{ui}
		</ProfilePageContext.Provider>,
		renderOptions
	);
};

describe("ProfilePageCards", () => {
	it("renders", () => {
		renderWithProfilePageCtx(<ProfilePageCards />);
	});
});
