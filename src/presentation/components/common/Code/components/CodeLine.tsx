import React from "react";

type CodeLineProps = React.HTMLAttributes<HTMLElement>;

export const CodeLine = (props: CodeLineProps) => {
	const { children, className, ...rest } = props;
	return (
		<code {...rest} className={`${className} !text-sm`}>
			{children}
		</code>
	);
};
