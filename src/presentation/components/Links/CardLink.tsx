import Link, { LinkProps } from "next/link";
import { Card } from "../common/Card";

type CardLinkProps = LinkProps &
	Omit<Parameters<typeof Card>[0], "hasArrowIcon"> & {
		linkTitle?: string;
		withTargetBlank?: boolean;
	};

export const CardLink = (props: CardLinkProps) => {
	const {
		linkTitle,
		title,
		description,
		additional,
		withTargetBlank,
		...rest
	} = props;

	return (
		<Link
			{...rest}
			title={linkTitle}
			target={withTargetBlank ? "_blank" : undefined}
			rel={withTargetBlank ? "noreferrer" : undefined}
			className="group transition-[brightness] hover:brightness-110 focus:brightness-110"
		>
			<Card
				title={title}
				description={description}
				additional={additional}
				hasArrowIcon={true}
			/>
		</Link>
	);
};
