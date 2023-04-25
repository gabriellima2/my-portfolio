import type { HTMLAttributes } from "react";

type HeadingDefaultProps = HTMLAttributes<HTMLHeadingElement>;

type TitleProps = HeadingDefaultProps;

export const Title = (props: TitleProps) => {
	const { className, ...rest } = props;

	return <h1 {...rest} className={`text-2xl ${className}`} />;
};
