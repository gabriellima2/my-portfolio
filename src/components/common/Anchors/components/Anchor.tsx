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
			>
				<span>{position}</span> {title}
			</Link>
		</li>
	);
};
