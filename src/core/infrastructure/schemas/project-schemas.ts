import { gql } from "@apollo/client";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

export const GET_PROJECTS_SCHEMA = gql`
	query Projects {
		projects {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;

export const GET_PROJECTS_WITH_LIMIT_SCHEMA = (limit: number) => gql`
	query Projects {
		projects (first: ${limit}) {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;
