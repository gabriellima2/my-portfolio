import { render, screen } from "@testing-library/react";
import { CardLink } from "./CardLink";

const TAGS = ["any_label_1", "any_label_2", "any_label_3"];
const TITLE = "any_title";
const DESCRIPTION = "any_description";

const renderComponent = (props: Parameters<typeof CardLink>[0]) =>
	render(<CardLink {...props} />);

describe("<CardLink />", () => {
	describe("Render", () => {
		it("should render correctly with all text props filled in", () => {
			renderComponent({
				tags: TAGS,
				title: TITLE,
				description: DESCRIPTION,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			TAGS.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
		});
		it("should render correctly without props tags", () => {
			renderComponent({
				title: TITLE,
				description: DESCRIPTION,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			TAGS.forEach((tag) =>
				expect(screen.queryByText(tag)).not.toBeInTheDocument()
			);
		});
		it("should render correctly without props description", () => {
			renderComponent({
				tags: TAGS,
				title: TITLE,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			TAGS.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
		});
		it("should render correctly without description and tags props", () => {
			renderComponent({
				title: TITLE,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			TAGS.forEach((tag) =>
				expect(screen.queryByText(tag)).not.toBeInTheDocument()
			);
		});
	});
});
