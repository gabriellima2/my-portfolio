import { Anchor } from "./components";
import type { IAnchor } from "@/interfaces/IAnchor";

type AnchorsProps = {
	anchors: IAnchor[];
	className?: string;
};

export const Anchors = (props: AnchorsProps) => {
	const { anchors, className } = props;
	return (
		<ul className={`flex gap-11 ${className}`}>
			{anchors.map((anchor, index) => (
				<Anchor key={anchor.title} {...anchor} position={index + 1} />
			))}
		</ul>
	);
};
