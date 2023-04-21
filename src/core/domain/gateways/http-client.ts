export interface IHttpClient {
	get<B>(params: HttpClient.Request): Promise<HttpClient.Response<B>>;
}

export namespace HttpClient {
	export type Request = {
		url: string;
		body?: unknown;
		headers?: unknown;
	};
	export type Response<B> = {
		statusCode: number;
		ok: boolean;
		body: B;
	};
}
