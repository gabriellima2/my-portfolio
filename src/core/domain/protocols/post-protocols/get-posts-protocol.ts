import { PostEntity } from "@/core/domain/entities";

export namespace GetPostsProtocol {
	export type Response = {
		posts: Omit<PostEntity, "tags">[] | null;
	};
}
