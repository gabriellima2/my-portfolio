import type { HTMLAttributes } from "react";

type BaseHeaderProps = HTMLAttributes<HTMLElement>;

export const BaseHeader = (props: BaseHeaderProps) => {
	const { className, ...rest } = props;
	return (
		<header
			{...rest}
			className={`${className} flex justify-between items-center pb-6 sm:pb-11 md:pb-16 lg:pb-21 border-b-2 border-util-secondary dark:border-util-secondary-dark`}
		/>
	);
};
