import type { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import {
	Article,
	Code,
	HandleError,
	PostContentSkeleton,
	ProfileSkeleton,
	Typography,
} from "@/presentation/components";
import * as PostEls from "@/presentation/components/PostEls";
import { StackLayout } from "@/presentation/layouts";

import { makePostServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";

import type { FetchEntity, PostEntity } from "@/core/domain/entities";
import type { GetPostBySlugProtocol } from "@/core/domain/protocols";

type PageProps = {
	post: FetchEntity<PostWithSerializedContent> | undefined;
};

type PostWithSerializedContent = Omit<PostEntity, "content"> & {
	content: MDXRemoteSerializeResult;
};

export default function Page(props: PageProps) {
	const { post } = props;
	const isLoading = !post;

	return (
		<StackLayout>
			<Article className="center--row">
				<div className="flex w-[800px] flex-col gap-21">
					{isLoading ? (
						<>
							<PostContentSkeleton />
							<ProfileSkeleton />
						</>
					) : (
						<HandleError error={post.error}>
							<MDXRemote
								{...post.data!.content}
								components={{
									h1: Typography.Title,
									h2: Typography.Subtitle,
									p: Typography.Paragraph,
									code: Code,
									a: PostEls.Anchor,
									img: PostEls.Image,
									li: PostEls.ListItem,
									strong: PostEls.Strong,
								}}
							/>
						</HandleError>
					)}
				</div>
			</Article>
		</StackLayout>
	);
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
	if (!params || !params.slug) {
		return {
			props: { post: { data: null } },
			redirect: { destination: "/blog" },
		};
	}

	const postServices = makePostServices();
	const post = await getData<PostEntity, GetPostBySlugProtocol.Response>(
		() => postServices.getBySlug.bind(postServices)(params.slug),
		"post"
	);
	if (post.data) {
		const html = await serialize(post.data.content);
		return {
			props: {
				post: { ...post, data: { ...post.data, content: html } },
			},
			revalidate: 10,
		};
	}
	return {
		props: { post: { ...post, data: null } },
		revalidate: 10,
		notFound: true,
	};
};
