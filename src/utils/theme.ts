import { parseCookies, setCookie } from "nookies";

import { THEME_ID_COOKIES } from "../constants";
import type { CurrentTheme } from "../types";

function getPreference(): CurrentTheme {
	const { [THEME_ID_COOKIES]: theme } = parseCookies();

	if (!theme || (theme !== "dark" && theme !== "light")) return "light";

	return theme;
}

function persist(theme: CurrentTheme) {
	setCookie(null, THEME_ID_COOKIES, theme, {
		maxAge: 60 * 60, // 1 Hora
		sameSite: "strict",
		path: "/",
	});
}

export const theme = { getPreference, persist };
