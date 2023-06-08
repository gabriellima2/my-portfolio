import type { GetStaticProps } from "next";

import {
	Article,
	HandleError,
	Head,
	PostsGroupedByYear,
	TextGroup,
} from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { makePostServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";
import { REVALIDATE } from "@/shared/constants";

import type { FetchEntity, PostPreviewEntity } from "@/core/domain/entities";
import type { GetPostsPreviewProtocol } from "@/core/domain/protocols";

type BlogProps = {
	posts: FetchEntity<PostPreviewEntity[]>;
};

export default function Blog(props: BlogProps) {
	const { posts } = props;
	return (
		<>
			<Head
				path="Blog"
				keywords="Blog, Pessoal, Estudos, Desenvolvimento, Programação, Aprender, Resolver, Web, Mobile"
				description="Este espaço é dedicado ao compartilhamento de conhecimentos e estudos pessoais. É uma oportunidade para praticar e..."
			/>
			<DefaultLayout withoutFooter={!!posts.error}>
				<Article>
					<TextGroup
						title="Blog"
						paragraphs={[
							"Este espaço é dedicado ao compartilhamento de conhecimentos e estudos pessoais. É uma oportunidade para praticar e aprimorar a habilidade de ensinar assuntos técnicos. Os temas abordados são aqueles que estou estudando atualmente ou pelos quais tenho curiosidade.",
						]}
					/>
				</Article>
				<section>
					<HandleError error={posts.error} className="py-21">
						<PostsGroupedByYear posts={posts.data!} />
					</HandleError>
				</section>
			</DefaultLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const postServices = makePostServices();
	const posts = await getData<
		PostPreviewEntity[],
		GetPostsPreviewProtocol.Response
	>(postServices.getAll.bind(postServices), "posts");

	return { props: { posts }, revalidate: REVALIDATE };
};
