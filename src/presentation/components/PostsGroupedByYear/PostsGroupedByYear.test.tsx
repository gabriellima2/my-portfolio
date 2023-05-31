import { render, screen } from "@testing-library/react";

import { PostsGroupedByYear } from "./PostsGroupedByYear";
import { postsMock } from "@/__mocks__/posts-mock";
import { slicePublishedDate } from "@/shared/helpers/slice-published-date";

const renderComponent = () => render(<PostsGroupedByYear posts={postsMock} />);

describe("<PostsGroupedByYear />", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			renderComponent();

			postsMock.forEach((post) => {
				const { year } = slicePublishedDate(post.publishedAt);
				expect(screen.getByText(year)).toBeInTheDocument();
				expect(screen.getByText(post.title));
			});
		});
	});
});
