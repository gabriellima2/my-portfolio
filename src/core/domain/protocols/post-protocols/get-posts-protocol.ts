import { PostEntity } from "@/core/domain/entities";

export interface GetPostsProtocol {
	posts: PostEntity[] | null;
}
