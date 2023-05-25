import { ProjectEntity } from "@/core/domain/entities";

export namespace GetProjectsProtocol {
	export type Response = {
		projects: ProjectEntity[] | null;
	};
}
