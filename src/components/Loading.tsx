import { AnimatePresence, motion } from "framer-motion";

interface LoadingProps {
	isVisible: boolean;
}

export const Loading = ({ isVisible }: LoadingProps) => (
	<AnimatePresence>
		{isVisible && (
			<motion.main
				hidden
				initial={{ opacity: 1, position: "absolute" }}
				exit={{ opacity: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className="w-screen h-screen flex items-center justify-center bg-main dark:bg-mainDark"
			>
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8 }}
					className="uppercase font-main font-bold text-xl md:text-2xl"
				>
					Gabriel Lima <span className="font-light italic">Portfólio</span>
				</motion.h1>
			</motion.main>
		)}
	</AnimatePresence>
);
