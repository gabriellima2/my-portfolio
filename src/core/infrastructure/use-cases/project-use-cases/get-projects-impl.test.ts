import { gql } from "@apollo/client";

import { GetProjectsImpl } from ".";
import { HttpStatusCode } from "@/core/domain/helpers";

import { servicesMock } from "./mocks/services-mock";
import { projectsMock } from "@/__mocks__/projects-mock";

const query = gql`
	query GetProjects {
		projects {
			id
			title
			description
			href
			techs
		}
	}
`;

const makeGetProjectsSuccessImpl = () =>
	new GetProjectsImpl(servicesMock.success);
const makeGetProjectsFailureImpl = () =>
	new GetProjectsImpl(servicesMock.failure);

describe("GetProjectsImpl use-case", () => {
	it("should response correctly with success request", async () => {
		const sut = makeGetProjectsSuccessImpl();
		const response = await sut.execute({ url: "any_url", body: query });

		expect(response.ok).toBeTruthy();
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.body.projects).toMatchObject(projectsMock);
	});
	it("should response correctly with failure request", async () => {
		const sut = makeGetProjectsFailureImpl();
		const response = await sut.execute({ url: "any_url", body: query });

		expect(response.ok).toBeFalsy();
		expect(response.statusCode).toBe(HttpStatusCode.badRequest);
		expect(response.body.projects).toBeNull();
	});
});
