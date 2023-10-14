import React, { type ComponentType, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ClientOnly } from "./ClientOnly";

import { makeSessionStorage } from "@/core/main/factories";

const STORAGE_KEY = "already-loaded";
enum STORAGE_VALUES {
	true = "1",
	false = "0",
}

const session = makeSessionStorage();
let timer: NodeJS.Timer;

export function WithFakeLoading<P extends object>(
	Component: ComponentType<P>,
	Loading: ComponentType
) {
	return ClientOnly((props: P) => {
		const [alreadyLoaded, setAlreadyLoaded] = useState(false);

		const defineInterval = () => {
			clearInterval(timer);
			timer = setInterval(() => {
				setAlreadyLoaded(true);
			}, 2000);
			return () => clearInterval(timer);
		};

		const persistState = () => {
			session.set(
				STORAGE_KEY,
				alreadyLoaded ? STORAGE_VALUES.true : STORAGE_VALUES.false
			);
		};

		const setDocumentOverflow = (overflow: "scroll" | "hidden") => {
			const html = document.documentElement;
			html.style.overflowY = overflow;
		};

		useEffect(() => {
			setDocumentOverflow("hidden");
			const alreadyLoadedStored = session.get<STORAGE_VALUES>(STORAGE_KEY);
			if (alreadyLoadedStored && alreadyLoadedStored === STORAGE_VALUES.true)
				return setAlreadyLoaded(true);
			const clear = defineInterval();
			return () => clear();
		}, []);

		useEffect(() => {
			persistState();
			if (alreadyLoaded) return setDocumentOverflow("scroll");
		}, [alreadyLoaded]);

		return (
			<>
				<AnimatePresence>
					{!alreadyLoaded && (
						<motion.div
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
						>
							<Loading />
						</motion.div>
					)}
				</AnimatePresence>
				<motion.div
					initial={{ opacity: alreadyLoaded ? 1 : 0 }}
					whileInView={{
						opacity: 1,
						transition: { delay: alreadyLoaded ? 0 : 2.4 },
					}}
				>
					<Component {...props} />
				</motion.div>
			</>
		);
	});
}
