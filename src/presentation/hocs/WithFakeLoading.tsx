import React, { type ComponentType, useEffect, useState } from "react";

import { makeSessionStorage } from "@/core/main/factories";
import { ClientOnly } from "./ClientOnly";

const STORAGE_KEY = "already-loaded";
enum STORAGE_VALUES {
	true = "1",
	false = "0",
}

const session = makeSessionStorage();
let timer: NodeJS.Timer;

export function WithFakeLoading<P extends object>(Component: ComponentType<P>) {
	return ClientOnly((props: P) => {
		const [alreadyLoaded, setAlreadyLoaded] = useState(false);

		const defineInterval = () => {
			clearInterval(timer);
			timer = setInterval(() => {
				setAlreadyLoaded(true);
			}, 1000);
			return () => clearInterval(timer);
		};

		const persistState = () => {
			session.set(
				STORAGE_KEY,
				JSON.stringify(
					alreadyLoaded ? STORAGE_VALUES.true : STORAGE_VALUES.false
				)
			);
		};

		useEffect(() => {
			const alreadyLoadedStored = session.get<STORAGE_VALUES>(STORAGE_KEY);
			if (alreadyLoadedStored && alreadyLoadedStored === STORAGE_VALUES.true)
				return setAlreadyLoaded(true);
			const clear = defineInterval();
			return () => clear();
		}, []);

		useEffect(() => {
			persistState();
		}, [alreadyLoaded]);

		if (!alreadyLoaded) return <p>Carregando...</p>;
		return <Component {...props} />;
	});
}
