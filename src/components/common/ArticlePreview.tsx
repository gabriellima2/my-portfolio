import type { HTMLAttributes } from "react";
import { Typography } from "./Typography";
import { Article } from "./Article";

type ArticlePreviewProps = HTMLAttributes<HTMLElement> & {
	title: string;
};

export const ArticlePreview = (props: ArticlePreviewProps) => {
	const { className, children, title, ...rest } = props;
	return (
		<Article
			{...rest}
			className={`${className} flex flex-col gap-21 lg:flex-row`}
		>
			<div className="w-full max-w-[590px] lg:border-r-2 border-util-secondary dark:border-util-secondary-dark">
				<Typography.Display>{title}</Typography.Display>
			</div>
			{children}
		</Article>
	);
};
