import { PostPreviewEntity } from "@/core/domain/entities";

export namespace GetPostsPreviewProtocol {
	export type Response = {
		posts: PostPreviewEntity[] | null;
	};
}
