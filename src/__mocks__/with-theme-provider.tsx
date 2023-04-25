import {
	ThemeContext,
	type IThemeProperties,
} from "@/shared/contexts/theme-context";
import type { TWithChildren } from "@/@types/TWithChildren";

type WithThemeProviderProps = TWithChildren & {
	value: IThemeProperties;
};

export const WithThemeProvider = (props: WithThemeProviderProps) => {
	const { children, value } = props;
	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};
