import { ArrowUpRight } from "phosphor-react";

import { Typography } from "../Typography";
import { Icon } from "../Icon";
import { Tags } from "../Tags";

type CardProps = {
	tags?: string[];
	title: string;
	description?: string;
	hasArrowIcon?: boolean;
};

export const Card = (props: CardProps) => {
	const { title, description, hasArrowIcon, tags } = props;
	return (
		<section className="flex flex-col gap-8 bg-util-primary p-6 sm:p-7 rounded-default border-2 border-transparent transition-all dark:bg-util-primary-dark">
			<header className="center--row justify-between gap-2">
				{tags && <Tags items={tags} />}
				{hasArrowIcon && (
					<Icon
						data-testid="arrow-icon"
						className="border-2 border-util-secondary p-2 rounded-full dark:border-util-secondary-dark"
						component={() => <ArrowUpRight />}
					/>
				)}
			</header>
			<div>
				<Typography.Title className="!text-l mb-5">{title}</Typography.Title>
				{description && (
					<Typography.Paragraph>{description}</Typography.Paragraph>
				)}
			</div>
		</section>
	);
};
