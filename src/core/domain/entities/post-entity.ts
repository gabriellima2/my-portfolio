export interface PostEntity {
	slug: string;
	title: string;
	tags: string[];
	content: {
		html: string;
	};
}
