import { gql } from "@apollo/client";

import { client } from "../lib/client";
import type { UserProjectsResponse, ProjectsInfo } from "../types";

interface ProjectsQuery {
	projects: ProjectsInfo;
}

interface User {
	data: UserProjectsResponse;
}

export class UserProjects implements User {
	public data: UserProjectsResponse;
	constructor() {
		this.data = null;
	}

	private async getProjects() {
		const getProjectsQuery = gql`
			query GetProjects {
				projects {
					id
					name
					url
					image {
						url
					}
				}
			}
		`;

		try {
			const { data, error } = await client.query<ProjectsQuery>({
				query: getProjectsQuery,
			});

			if (error) throw new Error("Ocorreu um erro. Verifique sua conexão.");

			return data.projects;
		} catch (err) {
			console.error(err);
			return;
		}
	}

	public async execute() {
		const projects = await this.getProjects();

		if (!projects) {
			return (this.data = null);
		}

		this.data = projects;
	}
}
