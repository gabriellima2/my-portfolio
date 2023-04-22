import { DocumentNode } from "graphql";

import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { graphQLClient } from "../lib/graph-ql-client";

export class HttpClientGatewayImpl implements IHttpClientGateway {
	async get<B>(
		params: HttpClientGateway.Request
	): Promise<HttpClientGateway.Response<B>> {
		const response = await graphQLClient.query({
			query: params.body as DocumentNode,
		});
		return {
			body: response.data,
			ok: !!response.error,
			statusCode: response.networkStatus,
		};
	}
}
