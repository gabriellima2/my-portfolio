import { makeCookiesAdapter } from "@/core/main/factories/adapters";
import { USER_THEME_PREFERENCE } from "@/shared/constants/user-theme-preference";

import type { Themes } from "@/shared/contexts/theme-context/@types/Themes";

const cookies = makeCookiesAdapter();
const THEME_COOKIE_AGE = 60 * 60; // 1 Hora

export const persistedUserThemePreference = {
	get: () => {
		const persistedTheme = cookies.get<Themes>(USER_THEME_PREFERENCE);
		if (
			!persistedTheme ||
			(persistedTheme !== "dark" && persistedTheme !== "light")
		)
			return "light";
		return persistedTheme;
	},
	set: (theme: Themes) =>
		cookies.set<Themes>(USER_THEME_PREFERENCE, theme, THEME_COOKIE_AGE),
};
