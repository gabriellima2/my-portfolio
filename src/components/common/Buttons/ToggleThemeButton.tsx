import { useThemeContext } from "@/contexts/theme-context";

export const ToggleThemeButton = () => {
	const { handleToggleTheme } = useThemeContext();
	return (
		<button type="button" title="Mudar tema" onClick={handleToggleTheme}>
			Tema
		</button>
	);
};
