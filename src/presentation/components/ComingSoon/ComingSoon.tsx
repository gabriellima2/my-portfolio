import { motion } from "framer-motion";
import { Typography } from "../common/Typography";

export const ComingSoon = () => (
	<motion.div
		initial={{ opacity: 0, translateY: 10 }}
		whileInView={{ opacity: 1, translateY: 0 }}
	>
		<Typography.Title className="!text-xl">
			Em breve você poderá explorar esse conteúdo.{" "}
			<span className="text-text">
				Estou trabalhando em novidades incríveis!
			</span>
		</Typography.Title>
	</motion.div>
);
