import Link from "next/link";
import { useRouter } from "next/router";

import type { IAnchor } from "@/interfaces/IAnchor";

type AnchorsProps = IAnchor & {
	position: number;
};

export const Anchor = (props: AnchorsProps) => {
	const { href, title, position } = props;
	const { pathname } = useRouter();

	const isCurrentPath = pathname === href;

	return (
		<li>
			<Link
				href={href}
				title={`Ir para ${title}`}
				aria-current={isCurrentPath}
				aria-disabled={isCurrentPath}
				tabIndex={isCurrentPath ? -1 : 0}
				className={`${
					isCurrentPath && "cursor-default text-heading dark:text-heading-dark"
				} font-medium whitespace-nowrap hover:text-heading focus:text-heading focus:dark:text-heading-dark hover:dark:text-heading-dark`}
			>
				<span className="mr-2">{position}</span> {title}
			</Link>
		</li>
	);
};
