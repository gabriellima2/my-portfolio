import type { ReactNode } from "react";
import { Article, Typography } from "..";

type GroupByYearProps = {
	year: number | string;
	children: ReactNode;
};

export const GroupByYear = (props: GroupByYearProps) => {
	const { year, children } = props;
	return (
		<Article className="flex flex-col gap-6 sm:flex-row sm:gap-11 md:gap-16 lg:gap-21">
			<Typography.Title className="font-normal sm:!text-4xl">
				{year}
			</Typography.Title>
			{children}
		</Article>
	);
};
