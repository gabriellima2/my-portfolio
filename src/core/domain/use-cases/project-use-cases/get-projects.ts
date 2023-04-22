import { HttpClientGateway } from "@/core/domain/gateways/http-client-gateway";
import { ProjectEntity } from "@/core/domain/entities/project-entity";

export interface IGetProjects {
	execute(params: HttpClientGateway.Request): Promise<GetProjects.Response>;
}

export namespace GetProjects {
	export type Response = HttpClientGateway.Response<{
		projects: ProjectEntity[];
	}>;
}
