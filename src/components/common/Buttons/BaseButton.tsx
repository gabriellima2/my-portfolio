import { type ButtonHTMLAttributes, useMemo } from "react";
import { buttonDefaultStyles } from "@/functions/button-default-styles";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	leftIcon?: () => JSX.Element;
	variants?: "default" | "square";
};

export const BaseButton = (props: BaseButtonProps) => {
	const { variants, leftIcon, className, children, ...rest } = props;
	const defaultStyles = useMemo(() => buttonDefaultStyles({ variants }), []);

	return (
		<button
			type="button"
			{...rest}
			className={`${defaultStyles.button} ${className}`}
		>
			{children}
			{!!leftIcon && <i className={defaultStyles.icon}>{leftIcon()}</i>}
		</button>
	);
};
