import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { GoTopButton } from "./GoTopButton";
import { changeDistanceToTopOfPage } from "@/shared/helpers/change-distance-to-top-of-page";

const BUTTON_TITLE = "Ir para o topo";
const renderComponent = () => render(<GoTopButton />);

describe("<GoTopButton />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByTitle(BUTTON_TITLE)).toBeInTheDocument();
		});
	});
	describe("Interactions", () => {
		describe("Click", () => {
			it("should handle click", async () => {
				renderComponent();

				changeDistanceToTopOfPage(20);
				await userEvent.click(screen.getByTitle(BUTTON_TITLE));

				expect(document.body.scrollTop).toBe(0);
				expect(document.documentElement.scrollTop).toBe(0);
			});
		});
	});
});
