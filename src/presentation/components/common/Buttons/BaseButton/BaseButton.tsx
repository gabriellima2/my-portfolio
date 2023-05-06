import { type ButtonHTMLAttributes } from "react";
import Link from "next/link";

import type { TWithChildren } from "@/@types/TWithChildren";

type ButtonAttrs = ButtonHTMLAttributes<HTMLButtonElement>;

type HTMLElementProps = TWithChildren &
	Pick<ButtonAttrs, "title" | "className" | "onClick">;

type AnchorElementProps = {
	href?: string;
};

type BaseButtonProps = HTMLElementProps &
	AnchorElementProps &
	Pick<ButtonAttrs, "type"> & {
		rightIcon?: () => JSX.Element;
		variants?: keyof typeof modifiers;
		as?: keyof typeof elements;
	};

const modifiers = {
	square: "!w-fit !p-2 !gap-3 !rounded-[8px]",
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
			className={`group flex w-full items-center justify-between gap-2 rounded-full border-2 border-util-secondary p-2 text-normal font-medium text-heading transition-[background-color] hover:bg-util-primary focus:bg-util-primary dark:border-util-secondary-dark dark:text-heading-dark dark:hover:bg-util-primary-dark dark:focus:bg-util-primary-dark ${
				hasRightIcon && "pl-6"
			} ${modifier} ${className}`}
			{...rest}
		>
			{children}
			{hasRightIcon && (
				<i className="center--row h-[36px] w-[36px] rounded-full border-2 border-util-secondary bg-util-primary group-hover:border-transparent group-focus:border-transparent dark:border-util-secondary-dark dark:bg-util-primary-dark">
					{rightIcon()}
				</i>
			)}
		</Element>
	);
};
