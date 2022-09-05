import "@testing-library/jest-dom";
import { render, RenderOptions, screen } from "@testing-library/react";
import { ComponentProps, ReactElement } from "react";
import profile from "../../mocks/profile";
import { ProfilePageContext, useProfilePage } from "../ProfilePageContext";

type ProviderProps = ComponentProps<typeof ProfilePageContext.Provider>;
interface CustomRenderOptions extends Omit<RenderOptions, "queries"> {
	providerProps: ProviderProps;
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
		const providerProps: ProviderProps = {
			value: {
				profile,
				setProfile: jest.fn(),
			},
		};
		customRender(
			<ProfilePageContext.Consumer>
				{(value) => (
					<span data-testid="span">{`${JSON.stringify(value)}`}</span>
				)}
			</ProfilePageContext.Consumer>,
			{ providerProps }
		);

		const spanElement = screen.getByTestId("span");

		const json = JSON.parse(
			spanElement.textContent ?? ""
		) as ProviderProps["value"];

		expect(json).toEqual(JSON.parse(JSON.stringify(providerProps.value)));
	});
});
