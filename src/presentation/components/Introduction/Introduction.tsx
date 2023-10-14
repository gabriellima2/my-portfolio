import { motion } from "framer-motion";

export const Introduction = () => {
	return (
		<article
			aria-label="Carregando..."
			className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center bg-main dark:bg-main-dark"
		>
			<motion.section
				initial={{ translateX: -5, opacity: 0.2 }}
				exit={{ translateX: -5, opacity: 0.2 }}
				whileInView={{ translateX: 0, opacity: 1 }}
				className="flex flex-col items-start justify-center"
			>
				<div className="flex w-full flex-row items-center gap-11">
					<h1 className="whitespace-nowrap text-[8vw] font-medium sm:text-2xl">
						Gabriel Lima ‘02
					</h1>
					<span className="block h-[3px] w-[72px] rounded-sm bg-util-secondary dark:bg-util-secondary-dark"></span>
				</div>
				<h2 className="text-[8vw] font-light sm:text-2xl">Portfólio</h2>
			</motion.section>
		</article>
	);
};
