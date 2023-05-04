import { ThemeProvider } from "./theme-context";
import { persistedUserThemePreference } from "../services";

import type { TWithChildren } from "@/@types/TWithChildren";

export const Providers = (props: TWithChildren) => {
	const { children } = props;
	return (
		<ThemeProvider
			documentClassName="dark"
			initialTheme={persistedUserThemePreference.get()}
			persistor={persistedUserThemePreference.set}
		>
			{children}
		</ThemeProvider>
	);
};
