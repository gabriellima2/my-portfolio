import { GetProjects } from "@/core/domain/use-cases/project-use-cases";

export interface IGetProjectsController {
	execute(
		limitNumberOfProjects?: number
	): Promise<GetProjects.Response | string>;
}
