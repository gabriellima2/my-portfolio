import { ProjectEntity } from "@/core/domain/entities/project-entity";
import { HttpStatusCode } from "@/core/domain/helpers/http-status-code";
import {
	GetProjects,
	IGetProjects,
} from "@/core/domain/use-cases/project-use-cases/get-projects";
import {
	HttpClientGateway,
	IHttpClientGateway,
} from "@/core/domain/gateways/http-client-gateway";

import { gql } from "@apollo/client";
import { servicesMock } from "./mocks/services-mock";
import { projectsMock } from "./mocks/projects-mock";

const query = gql`
	query GetProjects {
		projects {
			id
			title
			description
			href
			tags
		}
	}
`;

class GetProjectsImpl implements IGetProjects {
	constructor(private readonly client: IHttpClientGateway) {}

	async execute(
		params: HttpClientGateway.Request
	): Promise<GetProjects.Response> {
		const response = await this.client.get<ProjectEntity[]>(params);
		return {
			...response,
			body: { projects: response.body },
		};
	}
}

const makeGetProjectsImpl = () => new GetProjectsImpl(servicesMock.success);

describe("GetProjectsImpl use-case", () => {
	it("should response correctly with success request", async () => {
		const sut = makeGetProjectsImpl();
		const response = await sut.execute({ url: "any_url", body: query });

		expect(response.ok).toBeTruthy();
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.body.projects).toMatchObject(projectsMock);
	});
});
