import { ArrowRight } from "phosphor-react";

import { BaseButton } from "../common";
import type { TWithChildren } from "@/@types/TWithChildren";

type ArrowRightLinkProps = TWithChildren & {
	href: string;
	className?: string;
};

export const ArrowRightLink = (props: ArrowRightLinkProps) => {
	const { href, className, children } = props;
	return (
		<BaseButton
			as="a"
			href={href}
			rightIcon={() => <ArrowRight />}
			className={className}
		>
			{children}
		</BaseButton>
	);
};
