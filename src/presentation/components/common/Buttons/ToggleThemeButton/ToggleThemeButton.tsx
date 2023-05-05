import { useMemo } from "react";
import { SunDim, Moon } from "phosphor-react";

import { useThemeContext } from "@/shared/contexts/theme-context";
import { ClientOnly } from "@/presentation/hocs";

export const ToggleThemeButton = ClientOnly(() => {
	const { currentTheme, handleToggleTheme } = useThemeContext();
	const isDark = useMemo(() => currentTheme === "dark", [currentTheme]);

	return (
		<button
			type="button"
			title="Mudar tema"
			onClick={handleToggleTheme}
			aria-label={`Tema atual ${currentTheme}`}
			className="rounded-s p-1 hover:bg-util-primary focus:bg-util-primary dark:hover:bg-util-secondary-dark dark:focus:bg-util-secondary-dark"
		>
			{isDark ? <SunDim size={24} /> : <Moon size={24} />}
		</button>
	);
});
