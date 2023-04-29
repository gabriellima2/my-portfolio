import { render, screen } from "@testing-library/react";

import { Contact, type ContactProps } from "./Contact";
import type { IContact } from "@/shared/interfaces/IContact";

const DEFAULT_MASK = "any_mask";
const renderComponent = (props: ContactProps) => render(<Contact {...props} />);

describe("<Contact />", () => {
	describe("Render", () => {
		it("should render correctly with props filled", () => {
			const contact: IContact = {
				title: "any_title",
				href: "any_href",
				mask: DEFAULT_MASK,
			};

			renderComponent({ ...contact });

			const linkEl = screen.getByText(contact.title);

			expect(linkEl).toBeInTheDocument();
			expect(screen.getByText(contact.mask!)).toBeInTheDocument();
			expect(linkEl).toHaveAttribute("href", contact.href);
		});
		it("should render correctly with empty props mask", () => {
			const contact: IContact = {
				title: "any_title",
				href: "any_href",
			};

			renderComponent({ ...contact });

			const linkEl = screen.getByText(contact.title);

			expect(linkEl).toBeInTheDocument();
			expect(screen.queryByText(DEFAULT_MASK)).not.toBeInTheDocument();
			expect(linkEl).toHaveAttribute("href", contact.href);
		});
	});
});
