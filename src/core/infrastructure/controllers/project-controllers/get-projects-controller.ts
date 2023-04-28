import { ApolloError, gql } from "@apollo/client";

import { IGetProjectsController } from "@/core/domain/controllers/project-controllers";
import { makeGetProjectsImpl } from "@/core/main/factories/use-cases/project-use-cases";
import { GetProjects } from "@/core/domain/use-cases/project-use-cases";
import { UnexpectedError } from "@/core/domain/errors";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

export class GetProjectsController implements IGetProjectsController {
	async execute(
		projectsLimit?: number
	): Promise<GetProjects.Response | string> {
		const hasProjectsLimit = !!projectsLimit;
		if (hasProjectsLimit && projectsLimit <= 0)
			throw new Error("Quantidade inválida");
		try {
			const schema = hasProjectsLimit
				? gql`
			query Projects {
				projects (first: ${projectsLimit}) {
					${COMMON_FIELDS_SCHEMA}
				}
			}
		`
				: gql`
						query Projects {
							projects {
								${COMMON_FIELDS_SCHEMA}
							}
						}
				  `;
			const getProjects = makeGetProjectsImpl();
			const response = await getProjects.execute({ url: "", body: schema });
			if (!response.ok) throw new UnexpectedError("projetos");
			return response;
		} catch (err) {
			if (err instanceof ApolloError) return (err as ApolloError).message;
			return (err as Error).message;
		}
	}
}
