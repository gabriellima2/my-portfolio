import { HttpClientGateway } from "../../gateways";
import { ProjectEntity } from "../../entities";

export interface IGetProjectsController {
	execute(
		projectsLimit?: number
	): Promise<HttpClientGateway.Response<ProjectEntity[] | string>>;
}
