import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { GetProjectsProtocol } from "@/core/domain/protocols";
import { EmptyDataError } from "@/core/domain/errors";

import {
	GET_PROJECTS,
	GET_PROJECTS_WITH_LIMIT,
} from "@/core/infrastructure/schemas";

export class ProjectServices {
	constructor(private readonly client: IHttpClientGateway) {}

	async getAll(): Promise<HttpClientGateway.Response<GetProjectsProtocol>> {
		const response = await this.client.get<GetProjectsProtocol>({
			url: "",
			body: GET_PROJECTS,
		});
		if (!response.body.projects) throw new EmptyDataError();
		return response;
	}

	async getWithLimit(): Promise<
		HttpClientGateway.Response<GetProjectsProtocol>
	> {
		const response = await this.client.get<GetProjectsProtocol>({
			url: "",
			body: GET_PROJECTS_WITH_LIMIT,
		});
		if (!response.body.projects) throw new EmptyDataError();
		return response;
	}
}
