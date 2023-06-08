import { motion } from "framer-motion";

import { Date } from "../common/Date";
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
				<motion.li
					key={post.slug}
					initial={{ opacity: 0, translateY: 35 }}
					whileInView={{ opacity: 1, translateY: -0 }}
				>
					<CardLink
						href={`/blog/${post.slug}`}
						title={post.title}
						linkTitle={post.title}
						additional={() => (
							<Date date={post.publishedAt} label="Data de publicação" />
						)}
					/>
				</motion.li>
			))}
		</ol>
	);
};
