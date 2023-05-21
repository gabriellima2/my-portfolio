import { ApolloError, gql } from "@apollo/client";

import { IGetPostsController } from "@/core/domain/controllers";
import { HttpClientGateway } from "@/core/domain/gateways";
import { PostEntity } from "@/core/domain/entities";
import { IGetPosts } from "@/core/domain/use-cases";

import {
	DefaultError,
	EmptyDataError,
	InvalidDataLimitError,
	UnexpectedError,
} from "@/core/domain/errors";
import { HttpStatusCode } from "@/core/domain/helpers";

const COMMON_FIELDS_SCHEMA = `
  posts {
    slug
    tags
    title
  }
`;

const getSchema = (limit?: number) => {
	return limit
		? gql`
				query Posts {
					posts (first ${limit}) {
						${COMMON_FIELDS_SCHEMA}
					}
				}
			`
		: gql`
				query Posts {
					posts {
						${COMMON_FIELDS_SCHEMA}
					}
				}
				`;
};

export class GetPostsController implements IGetPostsController {
	constructor(private readonly getPosts: IGetPosts) {}

	async execute(
		postsLimit?: number | undefined
	): Promise<HttpClientGateway.Response<string | PostEntity[]>> {
		const hasPostsLimit = !!postsLimit;

		try {
			if (hasPostsLimit && postsLimit <= 0) throw new InvalidDataLimitError();

			const schema = getSchema(postsLimit);
			const response = await this.getPosts.execute({ url: "", body: schema });
			if (!response.ok) throw new UnexpectedError();
			if (!response.body.posts) throw new EmptyDataError();

			return { ...response, body: response.body.posts };
		} catch (err) {
			const error = {
				message: (err as DefaultError).message,
				code:
					err instanceof ApolloError
						? HttpStatusCode.serverError
						: (err as DefaultError).statusCode,
			};
			return {
				ok: false,
				body: error.message,
				statusCode: error.code,
			};
		}
	}
}
