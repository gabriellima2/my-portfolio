import { useThemeContext } from "../hooks/use-theme-context";

export const ButtonWithSpecificTheme = () => {
	const { currentTheme, handleToggleTheme } = useThemeContext();
	return (
		<button type="button" onClick={handleToggleTheme}>
			{currentTheme}
		</button>
	);
};
