import { type ButtonHTMLAttributes } from "react";
import Link from "next/link";

import type { TWithChildren } from "@/@types/TWithChildren";
import type { TUrl } from "@/@types/TUrl";

type HTMLElementProps = TWithChildren & {
	className?: string;
	title?: string;
};

type AnchorElementProps = {
	href?: TUrl;
};

type BaseButtonProps = HTMLElementProps &
	AnchorElementProps &
	Pick<ButtonHTMLAttributes<HTMLButtonElement>, "type"> & {
		rightIcon?: () => JSX.Element;
		variants?: keyof typeof modifiers;
		as?: keyof typeof elements;
	};

const modifiers = {
	square: "w-fit rounded-s p-3 gap-3",
	default: "",
};

const elements = {
	a: (props: AnchorElementProps) => (
		<Link {...props} href={props.href ? props.href : "#"} />
	),
	button: (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
		<button type="button" {...props} />
	),
};

export const BaseButton = (props: BaseButtonProps) => {
	const {
		as = "button",
		variants = "default",
		rightIcon,
		children,
		className,
		...rest
	} = props;

	const hasRightIcon = !!rightIcon;
	const modifier = modifiers[variants];
	const Element = elements[as];

	return (
		<Element
			className={`group w-full max-w-[587px] flex items-center justify-between gap-2 border-2 border-util-secondary rounded-full p-2 font-medium text-normal text-heading transition-colors hover:bg-util-primary focus:bg-util-primary dark:text-heading-dark dark:border-util-secondary-dark dark:hover:bg-util-primary-dark dark:focus:bg-util-primary-dark ${
				hasRightIcon && "pl-6"
			} ${modifier} ${className}`}
			{...rest}
		>
			{children}
			{hasRightIcon && (
				<i className="center--row rounded-full w-[36px] h-[36px] bg-util-primary border-2 border-util-secondary dark:border-util-secondary-dark dark:bg-util-primary-dark group-hover:border-transparent group-focus:border-transparent">
					{rightIcon()}
				</i>
			)}
		</Element>
	);
};
