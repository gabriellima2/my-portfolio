import { ArrowRightLink } from "./ArrowRightLink";

type SeeMoreLinkProps = {
	href: string;
	className?: string;
};

export const SeeMoreLink = (props: SeeMoreLinkProps) => {
	const { href, className } = props;
	return (
		<ArrowRightLink
			href={href}
			className={`mt-16 ${className}`}
			title="Ver mais"
		>
			Ver Mais
		</ArrowRightLink>
	);
};
