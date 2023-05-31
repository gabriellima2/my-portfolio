import type { GetStaticProps } from "next";

import { ComingSoon, Head } from "@/presentation/components";
import { DefaultLayout } from "@/presentation/layouts";

import { makePostServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";

import type { FetchEntity, PostPreviewEntity } from "@/core/domain/entities";
import type { GetPostsPreviewProtocol } from "@/core/domain/protocols";

type BlogProps = {
	posts: FetchEntity<PostPreviewEntity[]>;
};

export default function Blog(props: BlogProps) {
	const { posts } = props;

	return (
		<>
			<Head path="Blog" keywords="Coming soon" />
			<DefaultLayout withoutFooter>
				<section className="center--row pt-21">
					<ComingSoon />
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

	return {
		props: { posts },
		revalidate: 10,
	};
};
