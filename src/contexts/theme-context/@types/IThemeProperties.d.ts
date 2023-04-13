import type { Themes } from "./Themes";

export interface IThemeProperties {
	currentTheme: Themes;
	handleToggleTheme: () => void;
}
