import { useMemo } from "react";
import { SunDim, Moon } from "phosphor-react";

import { useThemeContext } from "@/contexts/theme-context";

export const ToggleThemeButton = () => {
	const { currentTheme, handleToggleTheme } = useThemeContext();
	const isDark = useMemo(() => currentTheme === "dark", [currentTheme]);

	return (
		<button
			type="button"
			title="Mudar tema"
			onClick={handleToggleTheme}
			aria-label={`Tema atual ${currentTheme}`}
		>
			{isDark ? <SunDim /> : <Moon />}
		</button>
	);
};
