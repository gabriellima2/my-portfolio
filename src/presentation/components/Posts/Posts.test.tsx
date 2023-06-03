import { render, screen } from "@testing-library/react";

import { Posts } from "./Posts";
import { postsMock } from "@/__mocks__/posts-mock";

const renderComponent = () => render(<Posts posts={postsMock} />);

describe("<Posts />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			const [post] = postsMock;
			const postEl = screen.getByTitle(post.title);
			const formattedDate = "17 Jun 2023";

			expect(postEl).toBeInTheDocument();
			expect(postEl).toHaveAttribute("href", `/blog/${post.slug}`);
			expect(screen.getByText(formattedDate)).toBeInTheDocument();
		});
	});
});
