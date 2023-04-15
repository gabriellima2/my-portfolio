import { render, screen } from "@testing-library/react";
import * as navigation from "next/navigation";
import { vi, Mock } from "vitest";

import { GoBackButton } from "./GoBackButton";
import { simulateClick } from "@/__mocks__/simulate-click";

vi.spyOn(navigation, "useRouter");

const useRouterMocked = navigation.useRouter as Mock;
const mockBack = vi.fn();

const renderComponent = () => {
	useRouterMocked.mockReturnValue({ back: mockBack });
	render(<GoBackButton />);
};

describe("<GoBackButton />", () => {
	afterEach(() => vi.clearAllMocks());
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByTitle("Voltar")).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			describe("Back", () => {
				it("should call the back function when clicked", async () => {
					renderComponent();

					const button = screen.getByTitle("Voltar");
					await simulateClick(button);

					expect(mockBack).toHaveBeenCalledTimes(1);
				});
			});
		});
	});
});
