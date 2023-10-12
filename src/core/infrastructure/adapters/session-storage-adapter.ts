import { IStorageAdapter } from "@/core/domain/adapters";

export class SessionStorageAdapter implements IStorageAdapter {
	get<T>(key: string): T | null {
		const storage = sessionStorage.getItem(key);
		if (!storage) return null;
		return JSON.parse(storage);
	}

	set<T>(key: string, value: T): void {
		sessionStorage.setItem(key, JSON.stringify(value));
	}

	remove(key: string) {
		sessionStorage.removeItem(key);
	}
}
