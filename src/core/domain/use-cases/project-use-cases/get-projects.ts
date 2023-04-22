import { HttpClientGateway } from "@/core/domain/gateways";
import { GetProjectsProtocol } from "@/core/domain/protocols/project-protocols";

export interface IGetProjects {
	execute(params: HttpClientGateway.Request): Promise<GetProjects.Response>;
}

export namespace GetProjects {
	export type Response = HttpClientGateway.Response<GetProjectsProtocol>;
}
