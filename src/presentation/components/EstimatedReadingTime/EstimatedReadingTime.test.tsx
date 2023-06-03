import { render, screen } from "@testing-library/react";
import {
	EstimatedReadingTime,
	EstimatedReadingTimeProps,
} from "./EstimatedReadingTime";

const LABEL = "Tempo de leitura estimado";
const ARTICLE_ID = "any_id";

const Article = () => (
	<article id={ARTICLE_ID}>
		<p>Hello World</p>
	</article>
);
const renderComponent = (props: EstimatedReadingTimeProps) => {
	render(<Article />);
	render(<EstimatedReadingTime {...props} />);
};

describe("<EstimatedReadingTime />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent({ articleId: ARTICLE_ID });
			expect(screen.getByLabelText(LABEL)).toBeInTheDocument();
		});
		it("should not render when passed invalid article id", () => {
			renderComponent({ articleId: "any_another_id" });
			expect(screen.queryByLabelText(LABEL)).not.toBeInTheDocument();
		});
	});
});
