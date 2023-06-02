import { FetchEntity, PostEntity } from "@/core/domain/entities";
import { GetPostBySlugProtocol } from "@/core/domain/protocols";
import { makePostServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";
import { GetStaticPaths, GetStaticProps } from "next";

type PageProps = {
	post: FetchEntity<PostEntity>;
};

export default function Page(props: PageProps) {
	console.log(props.post);
	return <div></div>;
}

type GetStaticPropsContextParams = {
	slug: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
	return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<
	PageProps,
	GetStaticPropsContextParams
> = async ({ params }) => {
	if (!params || !params.slug)
		return {
			props: { post: { data: null } },
			redirect: { destination: "/blog" },
		};

	const postServices = makePostServices();
	const post = await getData<PostEntity, GetPostBySlugProtocol.Response>(
		() => postServices.getBySlug.bind(postServices)(params.slug),
		"post"
	);
	return { props: { post }, revalidate: 10 };
};
