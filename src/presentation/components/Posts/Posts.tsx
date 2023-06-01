import { CardLink } from "../Links";

import { formatPublishedDate } from "@/shared/helpers/format-published-date";
import type { PostPreviewEntity } from "@/core/domain/entities";

type PostsProps = {
	posts: PostPreviewEntity[];
	className?: string;
};

export const Posts = (props: PostsProps) => {
	const { posts, className } = props;
	return (
		<ol className={className}>
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
		</ol>
	);
};
