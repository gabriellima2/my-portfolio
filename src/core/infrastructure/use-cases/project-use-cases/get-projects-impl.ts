import {
	GetProjects,
	IGetProjects,
} from "@/core/domain/use-cases/project-use-cases";
import { HttpClientGateway, IHttpClientGateway } from "@/core/domain/gateways";
import { ProjectEntity } from "@/core/domain/entities";

export class GetProjectsImpl implements IGetProjects {
	constructor(private readonly client: IHttpClientGateway) {}

	async execute(
		params: HttpClientGateway.Request
	): Promise<GetProjects.Response> {
		const response = await this.client.get<ProjectEntity[]>(params);
		return response;
	}
}
