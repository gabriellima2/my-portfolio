import type { HTMLAttributes } from "react";

type DisplayProps = HTMLAttributes<HTMLHeadingElement> & {
	size?: "default" | "sm";
};

export const Display = (props: DisplayProps) => {
	const { className, size = "default", ...rest } = props;
	const isSmallSize = size === "sm";

	return (
		<h1
			{...rest}
			className={`${className} ${
				isSmallSize ? "text-4xl" : "text-6xl"
			} font-medium`}
		/>
	);
};
