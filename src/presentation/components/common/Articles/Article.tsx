import type { HTMLAttributes } from "react";

type ArticleProps = HTMLAttributes<HTMLElement>;

export const Article = (props: ArticleProps) => {
	const { className, ...rest } = props;
	return (
		<article
			{...rest}
			className={`${className} border-b-2 border-b-util-secondary py-21 dark:border-b-util-secondary-dark`}
		/>
	);
};
