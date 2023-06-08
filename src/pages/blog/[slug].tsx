import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import {
	Article,
	Code,
	Contacts,
	Date,
	EstimatedReadingTime,
	HandleError,
	PostContentSkeleton,
	Profile,
	ProfileSkeleton,
	Tags,
	Typography,
} from "@/presentation/components";
import * as PostEls from "@/presentation/components/PostEls";
import { StackLayout } from "@/presentation/layouts";

import { makePostServices } from "@/core/main/factories";
import { getData } from "@/shared/helpers/get-data";
import { REVALIDATE } from "@/shared/constants";
import { contacts } from "@/shared/assets";

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
			<Article className="center--row" id="post-article">
				<div className="flex w-[800px] flex-col gap-21">
					{isLoading ? (
						<>
							<PostContentSkeleton />
							<ProfileSkeleton />
						</>
					) : (
						<HandleError error={post.error}>
							<header className="flex flex-col gap-8">
								<div className="flex items-center gap-8">
									<Date
										date={post.data!.publishedAt}
										label="Data de publicação"
									/>
									<EstimatedReadingTime articleId="post-article" />
								</div>
								<div className="center--row flex-wrap justify-start gap-1">
									<small>Tags:</small>
									<Tags items={post.data!.tags} />
								</div>
							</header>
							<section className="flex flex-col gap-8">
								<Typography.Title>{post.data!.title}</Typography.Title>
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
							</section>
							<footer>
								<Profile
									name="Gabriel Lima"
									description="Desenvoledor Front-end Web e Mobile"
									avatarSrc="/assets/photo.jpg"
									additional={() => (
										<Contacts
											contacts={contacts}
											className="!flex-row flex-wrap"
										/>
									)}
								/>
							</footer>
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
			props: { post: { ...post, data: { ...post.data, content: html } } },
			revalidate: REVALIDATE,
		};
	}
	return {
		props: { post: { ...post, data: null } },
		revalidate: REVALIDATE,
		notFound: true,
	};
};
