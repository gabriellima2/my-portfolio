import { type ButtonHTMLAttributes, useMemo } from "react";
import { buttonDefaultStyles } from "@/functions/button-default-styles";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	leftIcon?: () => JSX.Element;
};

export const BaseButton = (props: BaseButtonProps) => {
	const { leftIcon, className, children, ...rest } = props;

	const hasLeftIcon = !!leftIcon;
	const defaultStyles = useMemo(() => buttonDefaultStyles({ hasLeftIcon }), []);

	return (
		<button
			type="button"
			{...rest}
			className={`${defaultStyles.button} ${className}`}
		>
			{children}
			{hasLeftIcon && <i className={defaultStyles.icon}>{leftIcon()}</i>}
		</button>
	);
};
