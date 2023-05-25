import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const ADDITIONAL = "any_additional";
const TITLE = "any_title";
const DESCRIPTION = "any_description";
const ARROW_ICON = "arrow-icon";

const AdditionalComponent = () => <p>{ADDITIONAL}</p>;
const renderComponent = (props: Parameters<typeof Card>[0]) =>
	render(<Card {...props} />);

describe("<Card />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent({
				additional: AdditionalComponent,
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			expect(screen.getByText(ADDITIONAL)).toBeInTheDocument();
		});
		it("should render correctly without props additional", () => {
			renderComponent({
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			expect(screen.queryByText(ADDITIONAL)).not.toBeInTheDocument();
		});
		it("should render correctly without props description", () => {
			renderComponent({
				additional: AdditionalComponent,
				title: TITLE,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			expect(screen.getByText(ADDITIONAL)).toBeInTheDocument();
		});
		it("should render correctly without description and additional props", () => {
			renderComponent({
				title: TITLE,
				hasArrowIcon: true,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.queryByText(DESCRIPTION)).not.toBeInTheDocument();
			expect(screen.getByTestId(ARROW_ICON)).toBeInTheDocument();
			expect(screen.queryByText(ADDITIONAL)).not.toBeInTheDocument();
		});
		it("should render correctly without arrow icon", () => {
			renderComponent({
				additional: AdditionalComponent,
				title: TITLE,
				description: DESCRIPTION,
				hasArrowIcon: false,
			});

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
			expect(screen.queryByTestId(ARROW_ICON)).not.toBeInTheDocument();
			expect(screen.getByText(ADDITIONAL)).toBeInTheDocument();
		});
	});
});
