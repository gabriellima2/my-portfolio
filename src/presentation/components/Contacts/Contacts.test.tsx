import { render, screen } from "@testing-library/react";

import { Contacts } from "./Contacts";
import type { IContact } from "@/shared/interfaces/IContact";

const contacts: IContact[] = [{ href: "any_href", title: "any_title" }];

const renderComponent = () => render(<Contacts contacts={contacts} />);

describe("<Contacts />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			contacts.forEach((contact) => {
				expect(screen.getByText(contact.title)).toBeInTheDocument();
				if (contact.mask) {
					expect(screen.getByText(contact.mask)).toBeInTheDocument();
				}
			});
		});
	});
});
