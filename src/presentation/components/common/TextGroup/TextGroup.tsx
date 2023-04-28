import { Typography } from "../Typography";

type GroupTextProps = {
	title: string;
	paragraphs: string[];
};

export const TextGroup = (props: GroupTextProps) => {
	const { title, paragraphs } = props;
	return (
		<section className="flex flex-col gap-6 md:gap-10 w-full max-w-[590px]">
			<Typography.Display>{title}</Typography.Display>
			{paragraphs.map((paragraph) => (
				<Typography.Paragraph key={paragraph}>{paragraph}</Typography.Paragraph>
			))}
		</section>
	);
};
