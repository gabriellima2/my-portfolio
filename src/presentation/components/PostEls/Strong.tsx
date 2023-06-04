import React from "react";

type StrongProps = React.HTMLAttributes<HTMLElement>;

export const Strong = (props: StrongProps) => {
	const { className, ...rest } = props;
	return (
		<strong
			{...rest}
			className={`${className} font-semibold text-heading dark:text-heading-dark`}
		/>
	);
};
