import { useMemo } from "react";
import Link, { type LinkProps } from "next/link";

import { buttonDefaultStyles } from "@/functions/button-default-styles";
import type { TWithChildren } from "@/@types/TWithChildren";

type BaseLinkProps = LinkProps &
	TWithChildren & {
		leftIcon?: () => JSX.Element;
		className?: string;
		variants?: "default" | "square";
	};

export const BaseLink = (props: BaseLinkProps) => {
	const { variants, leftIcon, className, children, ...rest } = props;
	const defaultStyles = useMemo(() => buttonDefaultStyles({ variants }), []);

	return (
		<Link {...rest} className={`${defaultStyles.button} ${className}`}>
			{children}
			{!!leftIcon && <i className={defaultStyles.icon}>{leftIcon()}</i>}
		</Link>
	);
};
