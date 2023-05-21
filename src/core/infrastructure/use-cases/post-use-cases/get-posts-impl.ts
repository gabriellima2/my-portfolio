import { GetPosts, IGetPosts } from "@/core/domain/use-cases/post-use-cases";
import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { GetPostsProtocol } from "@/core/domain/protocols";

export class GetPostsImpl implements IGetPosts {
	constructor(private readonly client: IHttpClientGateway) {}

	async execute(params: HttpClientGateway.Request): Promise<GetPosts.Response> {
		const response = await this.client.get<GetPostsProtocol>(params);
		return response;
	}
}
