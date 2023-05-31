import { useMemo } from "react";

import { usePostsGroupedByYear } from "./hooks";

import { GroupByYear } from "../common";
import { Posts } from "../Posts";

import type { PostPreviewEntity } from "@/core/domain/entities";

type PostsGroupedByYearProps = {
	posts: PostPreviewEntity[];
};

export const PostsGroupedByYear = (props: PostsGroupedByYearProps) => {
	const { posts } = props;
	const groupedPosts = usePostsGroupedByYear(posts);
	const items = useMemo(() => Object.entries(groupedPosts), [groupedPosts]);

	return (
		<ol>
			{items.map(([year, posts]) => (
				<li key={year}>
					<GroupByYear year={year}>
						<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							<Posts posts={posts} />
						</ul>
					</GroupByYear>
				</li>
			))}
		</ol>
	);
};
