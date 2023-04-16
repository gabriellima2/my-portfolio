import { useMemo } from "react";
import Link, { type LinkProps } from "next/link";

import { buttonDefaultStyles } from "@/functions/button-default-styles";
import type { TWithChildren } from "@/@types/TWithChildren";

type BaseLinkProps = LinkProps &
	TWithChildren & {
		rightIcon?: () => JSX.Element;
		className?: string;
		variants?: "default" | "square";
	};

export const BaseLink = (props: BaseLinkProps) => {
	const { variants, rightIcon, className, children, ...rest } = props;

	const hasRightIcon = !!rightIcon;
	const defaultStyles = useMemo(
		() => buttonDefaultStyles({ variants, hasRightIcon }),
		[]
	);

	return (
		<Link {...rest} className={`${defaultStyles.button} ${className}`}>
			{children}
			{hasRightIcon && <i className={defaultStyles.icon}>{rightIcon()}</i>}
		</Link>
	);
};
