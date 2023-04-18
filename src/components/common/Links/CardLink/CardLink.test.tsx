import { render, screen } from "@testing-library/react";
import { CardLink } from "./CardLink";

const TAGS = ["any_label_1", "any_label_2", "any_label_3"];
const TITLE = "any_title";
const DESCRIPTION = "any_description";
const ARROW_ICON = "arrow-icon";

const renderComponent = (props: Parameters<typeof CardLink>[0]) =>
	render(<CardLink {...props} />);

describe("<CardLink />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent({
				tags: TAGS,
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			TAGS.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
		});
		it("should render correctly without props tags", () => {
			renderComponent({
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			TAGS.forEach((tag) =>
				expect(screen.queryByText(tag)).not.toBeInTheDocument()
			);
		});
		it("should render correctly without props description", () => {
			renderComponent({
				tags: TAGS,
				title: TITLE,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			TAGS.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
		});
		it("should render correctly without description and tags props", () => {
			renderComponent({
				title: TITLE,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			TAGS.forEach((tag) =>
				expect(screen.queryByText(tag)).not.toBeInTheDocument()
			);
		});
		it("should render correctly without arrow icon", () => {
			renderComponent({
				tags: TAGS,
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: false,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.queryByTestId(ARROW_ICON)).not.toBeInTheDocument();
			TAGS.forEach((tag) => expect(screen.getByText(tag)).toBeInTheDocument());
		});
	});
});
