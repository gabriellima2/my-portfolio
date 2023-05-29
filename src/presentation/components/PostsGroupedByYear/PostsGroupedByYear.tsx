import { PostPreviewEntity } from "@/core/domain/entities";

import { GroupByYear } from "../common";
import { Posts } from "../Posts";

type PostsGroupedByYearProps = {
	groupedPosts: { year: number; posts: PostPreviewEntity[] }[];
};

export const PostsGroupedByYear = (props: PostsGroupedByYearProps) => {
	const { groupedPosts } = props;
	return (
		<ol>
			{groupedPosts.map((group) => (
				<li key={group.year}>
					<GroupByYear year={group.year}>
						<ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							<Posts posts={group.posts} />
						</ul>
					</GroupByYear>
				</li>
			))}
		</ol>
	);
};
