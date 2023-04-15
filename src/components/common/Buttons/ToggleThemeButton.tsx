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
			className="p-1 rounded-s hover:bg-utilPrimary focus:bg-utilPrimary dark:focus:bg-utilSecondaryDark dark:hover:bg-utilSecondaryDark"
		>
			{isDark ? <SunDim size={24} /> : <Moon size={24} />}
		</button>
	);
};
