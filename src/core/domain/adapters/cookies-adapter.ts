export interface ICookiesAdapter {
	get<T>(key: string): T | null;
	set<T>(key: string, value: T, maxAge: number): void;
	remove<T>(key: string): T | null;
}
