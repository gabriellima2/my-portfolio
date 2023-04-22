import { HttpClientGateway } from "@/core/domain/gateways";
import { ProjectEntity } from "@/core/domain/entities";

export interface IGetProjects {
	execute(params: HttpClientGateway.Request): Promise<GetProjects.Response>;
}

export namespace GetProjects {
	export type Response = HttpClientGateway.Response<ProjectEntity[]>;
}
