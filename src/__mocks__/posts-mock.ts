import { PostEntity } from "@/core/domain/entities";

export const postsMock: PostEntity[] = [
	{
		title: "Aplicando Testes Unitários no ReactJS com Vitest",
		tags: ["any_tag"],
		slug: "aplicando-testes-unitarios-no-reactjs-com-vitest",
		publishedAt: "17 Jun 2023",
		content: { html: "any_html" },
	},
];
