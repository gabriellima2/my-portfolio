import { parseCookies, setCookie } from "nookies";

import { THEME_ID_COOKIES } from "../constants";
import type { CurrentTheme } from "../types";

function getPreference(): CurrentTheme {
	const { [THEME_ID_COOKIES]: theme } = parseCookies();

	function getOSPreference(): CurrentTheme {
		if (window.matchMedia("(prefers-color-scheme): dark").matches)
			return "dark";

		return "light";
	}

	if (!theme || (theme !== "dark" && theme !== "light")) {
		if (typeof window !== "undefined") return getOSPreference();

		return "light";
	}

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
