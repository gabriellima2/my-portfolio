import Link from "next/link";
import type { IAnchor } from "@/interfaces/IAnchor";

type AnchorsProps = {
	anchors: IAnchor[];
	className?: string;
};

export const Anchors = (props: AnchorsProps) => {
	const { anchors, className } = props;
	return (
		<ul className={`${className}`}>
			{anchors.map((anchor, index) => (
				<li key={anchor.title}>
					<Link href={anchor.href} title={`Ir para ${anchor.title}`}>
						<span>{index + 1}</span> {anchor.title}
					</Link>
				</li>
			))}
		</ul>
	);
};
