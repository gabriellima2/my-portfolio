import { setCookie, destroyCookie, parseCookies } from "nookies";
import { ICookiesAdapter } from "@/core/domain/adapters";

export class CookiesAdapter implements ICookiesAdapter {
	get<T>(key: string): T | null {
		const { [key]: valueInJSON } = parseCookies();
		if (!valueInJSON) return null;
		const value: T = JSON.parse(valueInJSON);
		return value;
	}

	set<T>(key: string, value: T, maxAge: number): void {
		const valueInJSON = JSON.stringify(value);
		setCookie(null, key, valueInJSON, {
			maxAge: maxAge,
			sameSite: "strict",
			path: "/",
			secure: true,
		});
	}

	remove<T>(key: string): T | null {}
}
