import type { HTMLAttributes } from "react";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = (props: ParagraphProps) => {
	const { className, ...rest } = props;
	return <p {...rest} className={`${className} text-normal`} />;
};
