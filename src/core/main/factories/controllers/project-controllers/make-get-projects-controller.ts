import { GetProjectsController } from "@/core/infrastructure/controllers/project-controllers/get-projects-controller";
import { makeGetProjectsImpl } from "@/core/main/factories/use-cases/project-use-cases";

export const makeGetProjectsController = () =>
	new GetProjectsController(makeGetProjectsImpl());
