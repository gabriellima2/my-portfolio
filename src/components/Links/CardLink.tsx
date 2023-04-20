import Link, { LinkProps } from "next/link";
import { Card } from "../common/Card";

type CardLinkProps = LinkProps &
	Omit<Parameters<typeof Card>[0], "hasArrowIcon">;

export const CardLink = (props: CardLinkProps) => {
	const { title, description, tags, ...rest } = props;
	return (
		<Link
			{...rest}
			className="group transition-all hover:brightness-110 focus:brightness-110"
		>
			<Card
				title={title}
				description={description}
				tags={tags}
				hasArrowIcon={true}
			/>
		</Link>
	);
};
