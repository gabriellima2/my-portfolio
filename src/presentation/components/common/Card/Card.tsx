import { ArrowUpRight } from "phosphor-react";

import { Typography } from "../Typography";
import { Icon } from "../Icon";

type CardProps = {
	additional?: () => JSX.Element;
	title: string;
	description?: string;
	hasArrowIcon?: boolean;
};

export const Card = (props: CardProps) => {
	const { title, description, hasArrowIcon, additional } = props;
	return (
		<section className="flex h-full flex-col gap-8 rounded-default border-2 border-transparent bg-util-primary p-6 dark:bg-util-primary-dark sm:p-7">
			<header className="center--row justify-between gap-2">
				{!!additional && additional()}
				{hasArrowIcon && (
					<Icon
						data-testid="arrow-icon"
						className="rounded-full border-2 border-util-secondary p-2 dark:border-util-secondary-dark"
						component={() => <ArrowUpRight />}
					/>
				)}
			</header>
			<div>
				<Typography.Title className="mb-5 !text-l">{title}</Typography.Title>
				{!!description && (
					<Typography.Paragraph>{description}</Typography.Paragraph>
				)}
			</div>
		</section>
	);
};
