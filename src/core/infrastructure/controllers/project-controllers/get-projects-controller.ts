import { ApolloError, gql } from "@apollo/client";

import { ProjectEntity } from "@/core/domain/entities";

import { IGetProjectsController } from "@/core/domain/controllers";
import { HttpClientGateway } from "@/core/domain/gateways";
import { IGetProjects } from "@/core/domain/use-cases";

import {
	EmptyDataError,
	InvalidDataLimitError,
	UnexpectedError,
	DefaultError,
} from "@/core/domain/errors";
import { HttpStatusCode } from "@/core/domain/helpers";

const COMMON_FIELDS_SCHEMA = `
	description
	href
	id
	techs
	title
`;

const getSchema = (limit?: number) => {
	return limit
		? gql`
			query Projects {
				projects (first: ${limit}) {
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
};

export class GetProjectsController implements IGetProjectsController {
	constructor(private readonly getProjects: IGetProjects) {}

	async execute(
		projectsLimit?: number | undefined
	): Promise<HttpClientGateway.Response<string | ProjectEntity[]>> {
		const hasProjectsLimit = !!projectsLimit;

		try {
			if (hasProjectsLimit && projectsLimit <= 0)
				throw new InvalidDataLimitError();

			const schema = getSchema(projectsLimit);
			const response = await this.getProjects.execute({
				url: "",
				body: schema,
			});
			if (!response.ok) throw new UnexpectedError();
			if (!response.body.projects) throw new EmptyDataError();

			return { ...response, body: response.body.projects };
		} catch (err) {
			const error = {
				message: (err as DefaultError).message,
				code:
					err instanceof ApolloError
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
