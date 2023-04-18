import { Tags } from "../../Tags";

type CardLinkProps = {
	tags?: string[];
	title: string;
	description?: string;
};

export const CardLink = (props: CardLinkProps) => {
	const { title, description, tags } = props;
	return (
		<section>
			<header>{tags && <Tags items={tags} />}</header>
			<h1>{title}</h1>
			{description && <p>{description}</p>}
		</section>
	);
};
