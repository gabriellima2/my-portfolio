import { render, screen } from "@testing-library/react";
import { Typography } from "../Typography";

type GroupTextProps = {
	title: string;
	paragraphs: string[];
};

export const GroupText = (props: GroupTextProps) => {
	const { title, paragraphs } = props;
	return (
		<section>
			<Typography.Display>{title}</Typography.Display>
			{paragraphs.map((paragraph) => (
				<Typography.Paragraph key={paragraph}>{paragraph}</Typography.Paragraph>
			))}
		</section>
	);
};

const TITLE = "any_title";
const PARAGRAPHS = ["any_paragraph_1", "any_paragraph_2"];
const renderComponent = () =>
	render(<GroupText title={TITLE} paragraphs={PARAGRAPHS} />);

describe("<GroupText />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			expect(screen.getByText(TITLE)).toBeInTheDocument();
			PARAGRAPHS.forEach((paragraph) =>
				expect(screen.getByText(paragraph)).toBeInTheDocument()
			);
		});
	});
});
