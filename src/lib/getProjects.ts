import { gql } from "@apollo/client";

import { client } from "./client";

export interface ProjectContent {
	id: string;
	image: {
		url: string;
	};
	name: string;
	description: string;
	textColor: {
		hex: string;
	};
	url: string;
	doc: string;
}

export interface ProjectData {
	projects: ProjectContent[];
}

const getProjectsQuery = gql`
	query GetProjects {
		projects {
			id
			image {
				url
			}
			name
			description
			textColor {
				hex
			}
			url
			doc
		}
	}
`;

export async function getProjects(): Promise<ProjectContent[] | null> {
	try {
		const { data } = await client.query<ProjectData>({
			query: getProjectsQuery,
		});

		return data.projects;
	} catch (err) {
		console.error(err);
		return null;
	}
}
