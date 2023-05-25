import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { GetProjectsProtocol } from "@/core/domain/protocols";
import { EmptyDataError } from "@/core/domain/errors";

import {
	GET_PROJECTS_SCHEMA,
	GET_PROJECTS_WITH_LIMIT_SCHEMA,
} from "@/core/infrastructure/schemas";

export class ProjectServices {
	constructor(private readonly client: IHttpClientGateway) {}

	async getAll(): Promise<
		HttpClientGateway.Response<GetProjectsProtocol.Response>
	> {
		const response = await this.client.get<GetProjectsProtocol.Response>({
			url: "",
			body: GET_PROJECTS_SCHEMA,
		});
		if (!response.body.projects) throw new EmptyDataError();
		return response;
	}

	async getWithLimit(): Promise<
		HttpClientGateway.Response<GetProjectsProtocol.Response>
	> {
		const response = await this.client.get<GetProjectsProtocol.Response>({
			url: "",
			body: GET_PROJECTS_WITH_LIMIT_SCHEMA(3),
		});
		if (!response.body.projects) throw new EmptyDataError();
		return response;
	}
}
