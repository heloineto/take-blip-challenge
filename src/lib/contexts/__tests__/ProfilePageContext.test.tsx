import "@testing-library/jest-dom";
import { render, RenderOptions } from "@testing-library/react";
import { ComponentProps, ReactElement } from "react";
import { ProfilePageContext, useProfilePage } from "../ProfilePageContext";

interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
	providerProps: ComponentProps<typeof ProfilePageContext.Provider>;
}

const customRender = (
	ui: ReactElement,
	{ providerProps, ...renderOptions }: CustomRenderOptions
) => {
	return render(
		<ProfilePageContext.Provider {...providerProps}>
			{ui}
		</ProfilePageContext.Provider>,
		renderOptions
	);
};

const ProfilePageConsumer = () => {
	const context = useProfilePage();

	return <span>Received: {JSON.stringify(context)}</span>;
};

describe("ProfilePageContext", () => {
	it("should throw an error if called outside a provider", () => {
		expect(() => render(<ProfilePageConsumer />)).toThrow(
			"`ProfilePageContext` is undefined. did you call `useProfilePage` outside a provider?"
		);
	});

	it("passes down context to consumers", () => {
		// const providerProps = {
		// 	first: "Boba",
		// 	last: "Fett",
		// };
		// customRender(
		// 	<ProfilePageContext.Consumer>
		// 		{(value) => <span>Received: {value}</span>}
		// 	</ProfilePageContext.Consumer>,
		// 	{ providerProps }
		// );
		// expect(screen.getByText(/^Received:/).textContent).toBe(
		// 	"Received: Boba Fett"
		// );
	});
});
