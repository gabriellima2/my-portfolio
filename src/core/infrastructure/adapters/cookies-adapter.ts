import { setCookie, destroyCookie, parseCookies } from "nookies";
import { ICookiesAdapter } from "@/core/domain/adapters";

export class CookiesAdapter implements ICookiesAdapter {
	get<T>(key: string): T | null {
		const { [key]: valueJSON } = parseCookies();
		if (!valueJSON) return null;
		const value: T = JSON.parse(valueJSON);
		return value;
	}

	set<T>(key: string, value: T, maxAge: number): T | null {}

	remove<T>(key: string): T | null {}
}
