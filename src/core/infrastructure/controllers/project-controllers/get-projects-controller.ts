import { ApolloError, gql } from "@apollo/client";

import { IGetProjectsController } from "@/core/domain/controllers/project-controllers";
import { makeGetProjectsImpl } from "@/core/main/factories/use-cases/project-use-cases";
import { GetProjects } from "@/core/domain/use-cases/project-use-cases";
import { UnexpectedError } from "@/core/domain/errors";

export class GetProjectsController implements IGetProjectsController {
	async execute(
		limitNumberOfProjects?: number
	): Promise<GetProjects.Response | string> {
		if (limitNumberOfProjects && limitNumberOfProjects <= 0)
			throw new Error("Quantidade inválida");
		try {
			const schema = gql`
				query Projects {
					projects ${limitNumberOfProjects && `(first: ${limitNumberOfProjects})`} {
						description
						href
						id
						techs
						title
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
