import { gql } from "@apollo/client";

const COMMON_FIELDS_SCHEMA = `
	slug
	title
	publishedAt
	content {
		html
	}
`;

export const GET_POST_BY_SLUG_SCHEMA = (slug: string) => gql`
	query Post {
		post (where: { slug: "${slug}" }) {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;

export const GET_POSTS_WITH_LIMIT_SCHEMA = (limit: number) => gql`
	query Posts {
		posts (first: ${limit}) {
			${COMMON_FIELDS_SCHEMA}
			tags
		}
	}
`;
