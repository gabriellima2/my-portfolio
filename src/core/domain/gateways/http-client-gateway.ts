export interface IHttpClientGateway {
	get<B>(
		params: HttpClientGateway.Request
	): Promise<HttpClientGateway.Response<B>>;
}

export namespace HttpClientGateway {
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
