import { useMemo } from "react";

import { slicePublishedDate } from "@/shared/helpers/slice-published-date";
import type { PostPreviewEntity } from "@/core/domain/entities";

interface GroupedPosts {
	[year: string]: PostPreviewEntity[];
}

export function usePostsGroupedByYear(
	posts: PostPreviewEntity[]
): GroupedPosts {
	const groupedPosts = useMemo(() => {
		return posts.reduce((acc, post) => {
			const { year: publishedYear } = slicePublishedDate(post.publishedAt);
			if (!acc[publishedYear]) acc[publishedYear] = [];
			acc[publishedYear].push(post);
			return acc;
		}, {} as GroupedPosts);
	}, [posts.length]);

	return groupedPosts;
}
