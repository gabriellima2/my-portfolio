import { HttpClient } from "@/core/domain/adapters/http-client";
import { ProjectEntity } from "@/core/domain/entities/project-entity";

export interface IGetProjects {
	execute(): Promise<GetProjects.Response>;
}

export namespace GetProjects {
	export type Response = HttpClient.Response<{
		projects: ProjectEntity[];
	}>;
}
