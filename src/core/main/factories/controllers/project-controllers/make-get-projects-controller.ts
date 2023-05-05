import { GetProjectsController } from "@/core/infrastructure/controllers";
import { makeGetProjectsImpl } from "@/core/main/factories/use-cases";

export const makeGetProjectsController = () =>
	new GetProjectsController(makeGetProjectsImpl());
