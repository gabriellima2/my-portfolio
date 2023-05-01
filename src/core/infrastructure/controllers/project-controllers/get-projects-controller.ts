import { ApolloError, gql } from "@apollo/client";

import { ProjectEntity } from "@/core/domain/entities";

import { IGetProjectsController } from "@/core/domain/controllers/project-controllers";
import { HttpClientGateway } from "@/core/domain/gateways";

import {
	EmptyDataError,
	InvalidDataLimitError,
	UnexpectedError,
} from "@/core/domain/errors";
import { DefaultError } from "@/core/domain/errors/default-error";
import { HttpStatusCode } from "@/core/domain/helpers";

import { IGetProjects } from "@/core/domain/use-cases/project-use-cases";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

export class GetProjectsController implements IGetProjectsController {
	constructor(private readonly getProjects: IGetProjects) {}

	async execute(
		projectsLimit?: number | undefined
	): Promise<HttpClientGateway.Response<string | ProjectEntity[]>> {
		const hasProjectsLimit = !!projectsLimit;
		if (hasProjectsLimit && projectsLimit <= 0)
			throw new InvalidDataLimitError();

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
			const response = await this.getProjects.execute({
				url: "",
				body: schema,
			});

			if (!response.ok) throw new UnexpectedError();
			if (!response.body.projects) throw new EmptyDataError();

			return { ...response, body: response.body.projects };
		} catch (err) {
			const isApolloError = err instanceof ApolloError;
			const error = {
				message: isApolloError
					? (err as ApolloError).message
					: (err as DefaultError).message,
				code: isApolloError
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
