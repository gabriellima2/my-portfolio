export class HttpClient {
	private url: string;

	constructor(url: string) {
		this.url = url;
	}

	public async request<Data>() {
		let data: Data | null | undefined;
		let error;

		try {
			const response = await fetch(this.url);
			data = await response.json();

			if (!data) throw new Error("Ocorreu um erro. Verifique sua conexão.");
		} catch (err) {
			error = err;
		}

		return { data, error };
	}
}
