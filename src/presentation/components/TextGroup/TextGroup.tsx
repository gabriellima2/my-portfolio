import { useMemo } from "react";
import { motion } from "framer-motion";

import { Typography } from "../common/Typography";
import { generateID } from "@/shared/helpers/generate-id";

type GroupTextProps = {
	title: string;
	paragraphs: string[];
};

type ParagraphsWithID = {
	id: string;
	value: string;
};

export const TextGroup = (props: GroupTextProps) => {
	const { title, paragraphs } = props;
	const paragraphsWithID: ParagraphsWithID[] = useMemo(
		() =>
			paragraphs.map((paragraph) => ({
				id: generateID(),
				value: paragraph,
			})),
		[]
	);

	return (
		<motion.section
			className="flex w-full max-w-[590px] flex-col gap-6 md:gap-10"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
		>
			<Typography.Display>{title}</Typography.Display>
			<div className="flex flex-col gap-6">
				{paragraphsWithID.map((paragraph) => (
					<Typography.Paragraph key={paragraph.id}>
						{paragraph.value}
					</Typography.Paragraph>
				))}
			</div>
		</motion.section>
	);
};
