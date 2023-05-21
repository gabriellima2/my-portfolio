import { PostEntity } from "@/core/domain/entities";

export const postsMock: PostEntity[] = [
	{
		title: "any_title",
		tags: ["any_tag"],
		slug: "any_slug",
		content: { html: "any_html" },
	},
];
