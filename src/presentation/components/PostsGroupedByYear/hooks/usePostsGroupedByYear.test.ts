import { renderHook } from "@testing-library/react";

import { usePostsGroupedByYear } from "./usePostsGroupedByYear";
import type { PostPreviewEntity } from "@/core/domain/entities";

const posts: PostPreviewEntity[] = [
	{ title: "any_title", slug: "any_slug_1", publishedAt: "2023-06-17" },
	{ title: "any_title", slug: "any_slug_2", publishedAt: "2023-09-18" },
	{ title: "any_title", slug: "any_slug_3", publishedAt: "2020-01-01" },
];

const execute = (posts: PostPreviewEntity[]) =>
	renderHook(() => usePostsGroupedByYear(posts));

describe("usePostsGroupedByYear", () => {
	it("should return correctly when posts have the same publication year", () => {
		const { result } = execute([posts[0], posts[1]]);

		expect(result.current).toMatchObject({ 2023: [posts[0], posts[1]] });
	});
	it("should return correctly when posts have different publication year", () => {
		const { result } = execute(posts);

		expect(result.current).toMatchObject({
			2023: [posts[0], posts[1]],
			2020: [posts[2]],
		});
	});
	it("should return correctly when posts have different year of publication and are not ordered", () => {
		const { result } = execute([posts[0], posts[2], posts[1]]);

		expect(result.current).toMatchObject({
			2023: [posts[0], posts[1]],
			2020: [posts[2]],
		});
	});
});
