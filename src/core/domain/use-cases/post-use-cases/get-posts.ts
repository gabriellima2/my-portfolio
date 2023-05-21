import { HttpClientGateway } from "@/core/domain/gateways";
import { GetPostsProtocol } from "@/core/domain/protocols";

export interface IGetPosts {
	execute(params: HttpClientGateway.Request): Promise<GetPosts.Response>;
}

export namespace GetPosts {
	export type Response = HttpClientGateway.Response<GetPostsProtocol>;
}
