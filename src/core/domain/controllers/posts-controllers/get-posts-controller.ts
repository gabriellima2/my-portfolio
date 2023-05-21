import { HttpClientGateway } from "../../gateways";
import { PostEntity } from "../../entities";

export interface IGetPostsController {
	execute(
		postsLimit?: number
	): Promise<HttpClientGateway.Response<PostEntity[] | string>>;
}
