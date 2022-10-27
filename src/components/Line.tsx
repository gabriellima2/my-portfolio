import { HTMLAttributes } from "react";

interface LineProps extends HTMLAttributes<HTMLSpanElement> {}

export const Line = ({ className, ...props }: LineProps) => (
	<span
		{...props}
		className={`${className} h-[1px] w-1/2 max-w-[192px] block bg-util/30 dark:bg-utilDark/30 order-first md:order-last md:max-w-none md:w-[1px] md:h-48`}
	/>
);
