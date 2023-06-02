import { gql } from "@apollo/client";

const COMMON_FIELDS_SCHEMA = `
	slug
	title
	publishedAt
`;

export const GET_POST_BY_SLUG_SCHEMA = (slug: string) => gql`
	query Post {
		post (where: { slug: "${slug}" }) {
			${COMMON_FIELDS_SCHEMA}
			content
			tags
		}
	}
`;

export const GET_POSTS_SCHEMA = (limit?: number) => {
	return limit
		? gql`
	query Posts {
		posts (first: ${limit}) {
			${COMMON_FIELDS_SCHEMA}
		}
	}`
		: gql`
	query Posts {
		posts {
			${COMMON_FIELDS_SCHEMA}
		}
	}`;
};
