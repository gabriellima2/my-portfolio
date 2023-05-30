import { gql } from "@apollo/client";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

export const GET_PROJECTS_SCHEMA = (limit?: number) => {
	return limit
		? gql`
	query Projects {
		projects (first: ${limit}) {
			${COMMON_FIELDS_SCHEMA}
		}
	}`
		: gql`
	query Projects {
		projects {
			${COMMON_FIELDS_SCHEMA}
		}
	}
`;
};
