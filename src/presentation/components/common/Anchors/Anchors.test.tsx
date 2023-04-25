import { render, screen } from "@testing-library/react";

import { Anchors } from "./Anchors";
import type { IAnchor } from "@/shared/interfaces/IAnchor";

const anchors: IAnchor[] = [{ href: "any_href", title: "any_title" }];

const renderComponent = () => render(<Anchors anchors={anchors} />);

describe("<Anchors />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			anchors.forEach((anchor) => {
				const anchorEl = screen.getByTitle(`Ir para ${anchor.title}`);

				expect(anchorEl).toBeInTheDocument();
				expect(anchorEl).toHaveAttribute("href", anchor.href);
				expect(screen.getByText(anchor.title)).toBeInTheDocument();
			});
		});
	});
});
