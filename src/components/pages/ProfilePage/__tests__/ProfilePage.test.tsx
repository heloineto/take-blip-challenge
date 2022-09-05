import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import profile from "../../../../lib/mocks/profile";
import ProfilePage from "../ProfilePage";

jest
	.spyOn(global, "fetch")
	.mockImplementation(
		jest.fn(() =>
			Promise.resolve({ json: () => Promise.resolve(profile) })
		) as jest.Mock
	);

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	useParams: () => ({ shortName: "eleven" }),
	useRouteMatch: () => ({ url: "/chatbot/eleven" }),
}));

describe("ProfilePage", () => {
	it("renders chatbot profile", async () => {
		render(<ProfilePage />);

		expect(await screen.findByText("Region and idiom")).toBeInTheDocument();
		expect(await screen.findByText("Timezone")).toBeInTheDocument();
		expect(await screen.findByText("Usuários ativos")).toBeInTheDocument();
		expect(await screen.findByText("Mensagens recebidas")).toBeInTheDocument();
		expect(await screen.findByText("Mensagens enviadas")).toBeInTheDocument();
	});

	it("handle network errors", async () => {
		jest
			.spyOn(global, "fetch")
			.mockImplementationOnce(
				jest.fn(() => Promise.reject("API failure")) as jest.Mock
			);

		render(<ProfilePage />);

		const heading = await screen.findByText("Error");

		expect(heading).toBeInTheDocument();
	});
});
