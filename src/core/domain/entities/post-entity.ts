export interface PostEntity {
	slug: string;
	title: string;
	tags: string[];
	publishedAt: string;
	content: {
		html: string;
	};
}

export interface PostPreviewEntity extends Omit<PostEntity, "tags"> {}
