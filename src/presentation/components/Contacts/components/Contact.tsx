import { motion } from "framer-motion";

import type { IContact } from "@/shared/interfaces/IContact";

export type ContactProps = IContact & {
	variants?: "default" | "with-mask";
	hasWhileInViewAnimation?: boolean;
};

export const Contact = (props: ContactProps) => {
	const {
		title,
		href,
		mask,
		variants = "default",
		hasWhileInViewAnimation = false,
	} = props;
	const isToRenderTheMask = variants === "with-mask" && mask;

	return (
		<motion.li
			initial={
				hasWhileInViewAnimation && {
					opacity: 0,
					translateY: 35,
				}
			}
			whileInView={{ opacity: 1, translateY: -0 }}
		>
			<a
				href={href}
				target="_blank"
				rel="noreferrer"
				title={`Entrar em contato via ${title}`}
				className="text-normal transition-opacity hover:underline hover:opacity-80 focus:underline focus:opacity-80 dark:text-heading-dark"
			>
				{title}
				{isToRenderTheMask && (
					<>
						<span>:</span>
						<span className="ml-1 font-normal text-text dark:text-text-dark">
							{mask}
						</span>
					</>
				)}
			</a>
		</motion.li>
	);
};
