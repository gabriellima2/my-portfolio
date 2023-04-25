import type { HTMLAttributes } from "react";

type HeadingDefaultProps = HTMLAttributes<HTMLHeadingElement>;

type TitleProps = HeadingDefaultProps & {
	as?: keyof typeof elements;
	size?: keyof typeof sizes;
};

const elements = {
	h2: (props: HeadingDefaultProps) => <h2 {...props} />,
	h3: (props: HeadingDefaultProps) => <h3 {...props} />,
	h4: (props: HeadingDefaultProps) => <h4 {...props} />,
	h5: (props: HeadingDefaultProps) => <h5 {...props} />,
	h6: (props: HeadingDefaultProps) => <h6 {...props} />,
};

const sizes = {
	default: "text-xl",
	sm: "text-l",
	xs: "text-medium",
};

export const Subtitle = (props: TitleProps) => {
	const { as = "h2", size = "default", className, ...rest } = props;
	const sizeElement = sizes[size];
	const Element = elements[as];

	return <Element {...rest} className={`${className} ${sizeElement}`} />;
};
