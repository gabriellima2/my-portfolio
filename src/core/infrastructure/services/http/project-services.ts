import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { GetProjectsProtocol } from "@/core/domain/protocols";
import { EmptyDataError } from "@/core/domain/errors";

import { GET_PROJECTS_SCHEMA } from "@/core/infrastructure/schemas";

export class ProjectServices {
	constructor(private readonly client: IHttpClientGateway) {}

	async getAll(
		limit?: number
	): Promise<HttpClientGateway.Response<GetProjectsProtocol.Response>> {
		const response = await this.client.get<GetProjectsProtocol.Response>({
			url: "",
			body: GET_PROJECTS_SCHEMA(limit),
		});
		if (!response.body.projects) throw new EmptyDataError();
		return response;
	}
}
