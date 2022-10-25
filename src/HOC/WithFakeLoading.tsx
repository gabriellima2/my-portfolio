import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Loading } from "../components/Loading";
import type { Component } from "../types";

export function WithFakeLoading<P extends object>(Component: Component) {
	return function HighOrder(props: P) {
		const [isLoading, setIsLoading] = useState(true);

		useEffect(() => {
			const timeout = setTimeout(() => setIsLoading(false), 200);

			return () => clearTimeout(timeout);
		}, []);

		return (
			<>
				<Loading isVisible={isLoading} />
				<motion.div
					initial={{ translateY: "-30px", opacity: 0, visibility: "hidden" }}
					animate={{ translateY: "0px", opacity: 1, visibility: "visible" }}
					transition={{ duration: 1, delay: 1.9 }}
				>
					<Component {...props} />
				</motion.div>
			</>
		);
	};
}
