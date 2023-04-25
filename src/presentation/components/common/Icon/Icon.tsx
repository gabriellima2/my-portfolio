import { HTMLAttributes } from "react";

type IconProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
	component: () => JSX.Element;
};

export const Icon = (props: IconProps) => {
	const { component, className, ...rest } = props;
	return (
		<i
			{...rest}
			className={`center--row rounded-full w-[36px] h-[36px] text-heading transition-all bg-util-primary border-2 border-util-secondary dark:border-util-secondary-dark dark:text-heading-dark dark:bg-util-primary-dark group-hover:border-transparent group-focus:border-transparent ${className}`}
		>
			{component()}
		</i>
	);
};
