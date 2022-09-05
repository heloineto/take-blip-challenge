import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProfilePageLoading from "../ProfilePageLoading";

describe("ProfilePageLoading", () => {
	it("renders static structure", () => {
		render(<ProfilePageLoading />);

		expect(screen.getByText("Region and idiom")).toBeInTheDocument();
		expect(screen.getByText("Timezone")).toBeInTheDocument();
		expect(screen.getByText("Usuários ativos")).toBeInTheDocument();
		expect(screen.getByText("Mensagens recebidas")).toBeInTheDocument();
		expect(screen.getByText("Mensagens enviadas")).toBeInTheDocument();
	});
});
