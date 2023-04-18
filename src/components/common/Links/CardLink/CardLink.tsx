import { ArrowUpRight } from "phosphor-react";
import { Tags } from "../../Tags";

type CardLinkProps = {
	tags?: string[];
	title: string;
	description?: string;
	hasArrowIcon?: boolean;
};

export const CardLink = (props: CardLinkProps) => {
	const { title, description, hasArrowIcon, tags } = props;
	return (
		<section>
			<header>
				{tags && <Tags items={tags} />}
				{hasArrowIcon && (
					<i data-testid="arrow-icon">
						<ArrowUpRight />
					</i>
				)}
			</header>
			<h1>{title}</h1>
			{description && <p>{description}</p>}
		</section>
	);
};
