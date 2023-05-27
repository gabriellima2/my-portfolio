import { render, screen } from "@testing-library/react";

import { Posts } from "./Posts";
import { postsMock } from "@/__mocks__/posts-mock";

const renderComponent = () => render(<Posts posts={postsMock} />);

describe("<Posts />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			postsMock.forEach((post) => {
				const postEl = screen.getByTitle(post.title);

				expect(postEl).toBeInTheDocument();
				expect(postEl).toHaveAttribute("href", `/blog/${post.slug}`);
				expect(screen.getByText(post.publishedAt)).toBeInTheDocument();
			});
		});
	});
});
