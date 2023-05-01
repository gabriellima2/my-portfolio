import type { HTMLAttributes } from "react";

type BaseHeaderProps = HTMLAttributes<HTMLElement>;

export const BaseHeader = (props: BaseHeaderProps) => {
	const { className, ...rest } = props;
	return (
		<header
			{...rest}
			className={`${className} flex items-center justify-between border-b-2 border-util-secondary pb-6 dark:border-util-secondary-dark sm:pb-11 md:pb-16 lg:pb-21`}
		/>
	);
};
