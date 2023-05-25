import { PostEntity } from "@/core/domain/entities";

export namespace GetPostBySlugProtocol {
	export type Response = {
		post: PostEntity | null;
	};
}
