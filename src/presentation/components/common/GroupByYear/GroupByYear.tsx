import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { Article, Typography } from "..";

type GroupByYearProps = {
	year: number | string;
	children: ReactNode;
};

export const GroupByYear = (props: GroupByYearProps) => {
	const { year, children } = props;
	return (
		<Article className="flex flex-col gap-6 sm:flex-row sm:gap-11 md:gap-16 lg:gap-21">
			<Typography.Title className="font-medium sm:!text-4xl">
				<motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
					{year}
				</motion.span>
			</Typography.Title>
			{children}
		</Article>
	);
};
