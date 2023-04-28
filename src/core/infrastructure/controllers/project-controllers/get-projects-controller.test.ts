import { vi } from "vitest";

import { GetProjectsController } from "./get-projects-controller";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "@/__mocks__/projects-mock";

const PROJECTS_LIMIT = projectsMock.length;
const makeGetProjectsController = () => new GetProjectsController();

describe("GetProjectsController", () => {
	beforeEach(() => vi.clearAllMocks());
	it("should throw an error if the limit number of projects is less than 0", async () => {
		try {
			const sut = makeGetProjectsController();
			await sut.execute(-1);
		} catch (err) {
			expect(err).toThrow(Error);
			expect((err as Error).message).toBe("Quantidade inválida");
		}
	});
	it("should response correctly if the limit number of projects is valid", async () => {
		const sut = makeGetProjectsController();

		const spy = vi.spyOn(GetProjectsController.prototype, "execute");
		spy.mockResolvedValue({
			body: { projects: projectsMock },
			ok: true,
			statusCode: HttpStatusCode.ok,
		});
		const response = await sut.execute(PROJECTS_LIMIT);
		if (typeof response === "string") return;

		expect(response.body.projects!.length).toBe(PROJECTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
	it("should response correctly if not passed a limit number", async () => {
		const sut = makeGetProjectsController();

		const spy = vi.spyOn(GetProjectsController.prototype, "execute");
		spy.mockResolvedValue({
			body: {
				projects: [
					...projectsMock,
					{
						href: "any_href",
						id: "any_id",
						techs: ["any_tech"],
						title: "any_title",
						description: "any_description",
					},
				],
			},
			ok: true,
			statusCode: HttpStatusCode.ok,
		});
		const response = await sut.execute();
		if (typeof response === "string") return;

		expect(response.body.projects!.length).toBeGreaterThan(PROJECTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
});
