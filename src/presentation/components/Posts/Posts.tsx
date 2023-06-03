import { Date } from "../common/Date/Date";
import { CardLink } from "../Links";

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
							<Date date={post.publishedAt} label="Data de publicação" />
						)}
					/>
				</li>
			))}
		</ol>
	);
};
