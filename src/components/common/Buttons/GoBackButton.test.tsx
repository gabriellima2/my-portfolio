import { render, screen } from "@testing-library/react";
import * as router from "next/router";
import { vi, Mock } from "vitest";

import { GoBackButton } from "./GoBackButton";
import { simulateClick } from "@/__mocks__/simulate-click";

vi.spyOn(router, "useRouter");

const useRouterMocked = router.useRouter as Mock;
const mockBack = vi.fn();

const renderComponent = (props?: Parameters<typeof GoBackButton>[0]) => {
	useRouterMocked.mockReturnValue({ back: mockBack });
	render(<GoBackButton {...props} />);
};

describe("<GoBackButton />", () => {
	afterEach(() => vi.clearAllMocks());
	describe("Render", () => {
		it("should render correctly with label text", () => {
			renderComponent();

			expect(screen.getByTitle("Voltar")).toBeInTheDocument();
			expect(screen.getByText("Voltar")).toBeInTheDocument();
		});
		it("should render correctly without label text", () => {
			renderComponent({ withLabelText: false });

			expect(screen.getByTitle("Voltar")).toBeInTheDocument();
			expect(screen.queryByText("Voltar")).not.toBeInTheDocument();
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
