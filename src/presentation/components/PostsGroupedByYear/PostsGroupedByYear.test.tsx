import { render, screen } from "@testing-library/react";

import { PostsGroupedByYear } from "./PostsGroupedByYear";
import { postsMock } from "@/__mocks__/posts-mock";

const POSTS_GROUPED_BY_YEAR = [{ year: 2023, posts: postsMock }];

const renderComponent = () =>
	render(<PostsGroupedByYear groupedPosts={POSTS_GROUPED_BY_YEAR} />);

describe("<PostsGroupedByYear />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			POSTS_GROUPED_BY_YEAR.forEach((group) => {
				expect(screen.getByText(group.year)).toBeInTheDocument();
				group.posts.forEach((post) => {
					expect(screen.getByText(post.title));
				});
			});
		});
	});
});
