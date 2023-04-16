import { type ButtonHTMLAttributes, useMemo } from "react";
import { buttonDefaultStyles } from "@/functions/button-default-styles";

type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	rightIcon?: () => JSX.Element;
	variants?: "default" | "square";
};

export const BaseButton = (props: BaseButtonProps) => {
	const { variants, rightIcon, className, children, ...rest } = props;

	const hasRightIcon = !!rightIcon;
	const defaultStyles = useMemo(
		() => buttonDefaultStyles({ variants, hasRightIcon }),
		[]
	);

	return (
		<button
			type="button"
			{...rest}
			className={`${defaultStyles.button} ${className}`}
		>
			{children}
			{hasRightIcon && <i className={defaultStyles.icon}>{rightIcon()}</i>}
		</button>
	);
};
