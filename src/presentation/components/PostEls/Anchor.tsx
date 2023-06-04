import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const Anchor = (props: AnchorProps) => {
	const { className, ...rest } = props;
	return (
		<a
			{...rest}
			className={`${className} text-heading underline dark:text-heading-dark`}
		/>
	);
};
