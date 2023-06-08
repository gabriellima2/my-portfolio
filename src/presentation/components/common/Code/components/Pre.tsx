import React from "react";

type PreProps = React.HTMLAttributes<HTMLElement>;

export const Pre = (props: PreProps) => {
	const { children, className, ...rest } = props;
	return (
		<pre
			{...rest}
			className={`${className} rounded-2xl border-2 border-util-secondary bg-util-primary dark:border-util-secondary-dark dark:!bg-util-primary-dark`}
		>
			{children}
		</pre>
	);
};
