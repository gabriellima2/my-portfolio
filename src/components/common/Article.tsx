import type { HTMLAttributes } from "react";

type ArticleProps = HTMLAttributes<HTMLElement>;

export const Article = (props: ArticleProps) => {
	const { className, ...rest } = props;
	return (
		<article
			{...rest}
			className={`${className} py-21 border-b-2 border-b-util-secondary dark:border-b-util-secondary-dark`}
		/>
	);
};
