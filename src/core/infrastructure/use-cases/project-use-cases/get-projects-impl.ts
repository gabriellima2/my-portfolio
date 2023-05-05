import { GetProjects, IGetProjects } from "@/core/domain/use-cases";
import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { GetProjectsProtocol } from "@/core/domain/protocols";

export class GetProjectsImpl implements IGetProjects {
	constructor(private readonly client: IHttpClientGateway) {}

	async execute(
		params: HttpClientGateway.Request
	): Promise<GetProjects.Response> {
		const response = await this.client.get<GetProjectsProtocol>(params);
		return response;
	}
}
