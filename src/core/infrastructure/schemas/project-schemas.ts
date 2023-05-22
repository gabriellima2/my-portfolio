import { gql } from "@apollo/client";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

export const GET_PROJECTS = gql`
	query Projects {
		projects {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;

export const GET_PROJECTS_WITH_LIMIT = gql`
	query Projects {
		projects (first: 3) {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;
