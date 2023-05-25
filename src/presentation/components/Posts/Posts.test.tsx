import { render, screen } from "@testing-library/react";

import { Posts } from "./Posts";

import { postsMock } from "@/__mocks__/posts-mock";
import { formatPublishedDate } from "@/shared/helpers/format-published-date";

const renderComponent = () => render(<Posts posts={postsMock} />);

describe("<Posts />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			postsMock.forEach((post) => {
				const postEl = screen.getByTitle(post.title);
				const formattedDate = formatPublishedDate(post.publishedAt);

				expect(postEl).toBeInTheDocument();
				expect(postEl).toHaveAttribute("href", `/blog/${post.slug}`);
				expect(screen.getByText(formattedDate)).toBeInTheDocument();
			});
		});
	});
});
