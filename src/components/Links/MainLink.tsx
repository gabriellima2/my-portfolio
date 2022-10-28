import Link from "next/link";
import type { Url } from "url";

interface Props
	extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
	href: Url | string;
}

const Text = ({ href, className, ...props }: Props) => (
	<Link href={href}>
		<a {...props} className={`${className} text-fontMain hover:line-through`} />
	</Link>
);

const Background = ({ href, ...props }: Props) => (
	<Link href={href}>
		<a {...props} className="button" />
	</Link>
);

export const MainLink = { Text, Background };
