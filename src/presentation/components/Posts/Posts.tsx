import { PostEntity } from "@/core/domain/entities";
import { CardLink } from "../Links";

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
					additional={() => <small>{post.publishedAt}</small>}
				/>
			))}
		</>
	);
};
