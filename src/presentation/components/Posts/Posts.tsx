import { CardLink } from "../Links";

import { formatPublishedDate } from "@/shared/helpers/format-published-date";
import type { PostEntity } from "@/core/domain/entities";

type PostsProps = {
	posts: Omit<PostEntity, "tags">[];
};

export const Posts = (props: PostsProps) => {
	const { posts } = props;
	return (
		<>
			{posts.map((post) => (
				<CardLink
					key={post.slug}
					href={`/blog/${post.slug}`}
					title={post.title}
					linkTitle={post.title}
					additional={() => (
						<small>{formatPublishedDate(post.publishedAt)}</small>
					)}
				/>
			))}
		</>
	);
};
