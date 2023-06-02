export interface PostEntity {
	slug: string;
	title: string;
	tags: string[];
	publishedAt: string;
	content: string
}

export interface PostPreviewEntity
	extends Omit<PostEntity, "tags" | "content"> {}
