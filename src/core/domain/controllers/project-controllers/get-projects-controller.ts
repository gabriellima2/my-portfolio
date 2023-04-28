import { GetProjects } from "@/core/domain/use-cases/project-use-cases";

export interface IGetProjectsController {
	execute(projectsLimit?: number): Promise<GetProjects.Response | string>;
}
