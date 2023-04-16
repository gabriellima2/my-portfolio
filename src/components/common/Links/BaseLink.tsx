import { TWithChildren } from "@/@types/TWithChildren";
import Link, { LinkProps } from "next/link";

type BaseLinkProps = LinkProps &
	TWithChildren & {
		leftIcon?: () => JSX.Element;
		className?: string;
	};

export const BaseLink = (props: BaseLinkProps) => {
	const { leftIcon, className, children, ...rest } = props;
	const hasLeftIcon = !!leftIcon;

	return (
		<Link
			{...rest}
			className={`group w-full max-w-[587px] flex items-center justify-between border-2 border-util-secondary rounded-full p-2 font-medium text-normal text-heading transition-colors hover:bg-util-primary focus:bg-util-primary dark:text-heading-dark dark:border-util-secondary-dark dark:hover:bg-util-primary-dark dark:focus:bg-util-primary-dark  ${
				hasLeftIcon && "pl-6"
			} ${className}`}
		>
			{children}
			{hasLeftIcon && (
				<i className="center--row rounded-full w-[36px] h-[36px] bg-util-primary border-2 border-util-secondary dark:border-util-secondary-dark dark:bg-util-primary-dark group-hover:border-transparent group-focus:border-transparent">
					{leftIcon()}
				</i>
			)}
		</Link>
	);
};
