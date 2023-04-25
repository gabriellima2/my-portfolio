import { vi } from "vitest";

import { GetProjectsController } from "./get-projects-controller";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "./mocks/projects-mock";

const LIMIT_NUMBER_OF_PROJECTS = 2;
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
		const response = await sut.execute(LIMIT_NUMBER_OF_PROJECTS);
		if (typeof response === "string") return;

		expect(response.body.projects!.length).toBe(LIMIT_NUMBER_OF_PROJECTS);
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
						tags: ["any_tag"],
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

		expect(response.body.projects!.length).toBeGreaterThan(
			LIMIT_NUMBER_OF_PROJECTS
		);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
});
