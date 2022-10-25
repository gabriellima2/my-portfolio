import { motion } from "framer-motion";

export const Copyright = () => (
	<motion.span
		initial={{ opacity: 0 }}
		animate={{ opacity: 0.4 }}
		transition={{ duration: 1.4 }}
		className="fixed bottom-8 right-8 italic"
	>
		&#169; 2022
	</motion.span>
);
