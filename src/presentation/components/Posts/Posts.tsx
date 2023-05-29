import { CardLink } from "../Links";

import { formatPublishedDate } from "@/shared/helpers/format-published-date";
import type { PostPreviewEntity } from "@/core/domain/entities";

type PostsProps = {
	posts: PostPreviewEntity[];
};

export const Posts = (props: PostsProps) => {
	const { posts } = props;
	return (
		<>
			{posts.map((post) => (
				<li key={post.slug}>
					<CardLink
						href={`/blog/${post.slug}`}
						title={post.title}
						linkTitle={post.title}
						additional={() => (
							<small>{formatPublishedDate(post.publishedAt)}</small>
						)}
					/>
				</li>
			))}
		</>
	);
};
