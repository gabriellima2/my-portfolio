import { useMemo } from "react";
import Link, { type LinkProps } from "next/link";

import { buttonDefaultStyles } from "@/functions/button-default-styles";
import type { TWithChildren } from "@/@types/TWithChildren";

type BaseLinkProps = LinkProps &
	TWithChildren & {
		leftIcon?: () => JSX.Element;
		className?: string;
	};

export const BaseLink = (props: BaseLinkProps) => {
	const { leftIcon, className, children, ...rest } = props;

	const hasLeftIcon = !!leftIcon;
	const defaultStyles = useMemo(() => buttonDefaultStyles({ hasLeftIcon }), []);

	return (
		<Link {...rest} className={`${defaultStyles.button} ${className}`}>
			{children}
			{hasLeftIcon && <i className={defaultStyles.icon}>{leftIcon()}</i>}
		</Link>
	);
};
