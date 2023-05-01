import { HTMLAttributes } from "react";

type IconProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
	component: () => JSX.Element;
};

export const Icon = (props: IconProps) => {
	const { component, className, ...rest } = props;
	return (
		<i
			{...rest}
			className={`center--row h-[36px] w-[36px] rounded-full border-2 border-util-secondary bg-util-primary text-heading transition-all group-hover:border-transparent group-focus:border-transparent dark:border-util-secondary-dark dark:bg-util-primary-dark dark:text-heading-dark ${className}`}
		>
			{component()}
		</i>
	);
};
