import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import {
	GetPostBySlugProtocol,
	GetPostsPreviewProtocol,
} from "@/core/domain/protocols";
import { EmptyDataError } from "@/core/domain/errors";

import {
	GET_POST_BY_SLUG_SCHEMA,
	GET_POSTS_SCHEMA,
} from "@/core/infrastructure/schemas";

export class PostServices {
	constructor(private readonly client: IHttpClientGateway) {}

	async getBySlug(
		slug: string
	): Promise<HttpClientGateway.Response<GetPostBySlugProtocol.Response>> {
		const response = await this.client.get<GetPostBySlugProtocol.Response>({
			url: "",
			body: GET_POST_BY_SLUG_SCHEMA(slug),
		});
		if (!response.body.post) throw new EmptyDataError();
		return response;
	}

	async getAll(
		limit?: number
	): Promise<HttpClientGateway.Response<GetPostsPreviewProtocol.Response>> {
		const response = await this.client.get<GetPostsPreviewProtocol.Response>({
			url: "",
			body: GET_POSTS_SCHEMA(limit),
		});
		const isEmptyArray = response.body.posts?.length === 0;
		if (!response.body.posts || isEmptyArray) throw new EmptyDataError();
		return response;
	}
}
