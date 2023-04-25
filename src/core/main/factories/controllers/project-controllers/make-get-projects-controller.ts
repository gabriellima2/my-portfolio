import { GetProjectsController } from "@/core/infrastructure/controllers/project-controllers/get-projects-controller";

export const makeGetProjectsController = () => new GetProjectsController();
