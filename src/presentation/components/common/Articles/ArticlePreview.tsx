import type { HTMLAttributes } from "react";
import { Typography, Article } from "..";

type ArticlePreviewProps = HTMLAttributes<HTMLElement> & {
	title: string;
};

export const ArticlePreview = (props: ArticlePreviewProps) => {
	const { className, children, title, ...rest } = props;
	return (
		<Article
			{...rest}
			className={`${className} grid grid-cols-1 gap-21 lg:grid-cols-2`}
		>
			<div className="lg:center--row w-full max-w-[590px] border-util-secondary pr-21 dark:border-util-secondary-dark lg:border-r-2">
				<Typography.Display>{title}</Typography.Display>
			</div>
			{children}
		</Article>
	);
};
