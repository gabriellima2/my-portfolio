import { vi } from "vitest";

import { InvalidDataLimitError, UnexpectedError } from "@/core/domain/errors";

import { GetProjectsController } from "./get-projects-controller";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "@/__mocks__/projects-mock";

const executeMocked = vi.fn();
const PROJECTS_LIMIT = projectsMock.length;
const makeGetProjectsController = () =>
	new GetProjectsController({ execute: executeMocked });

describe("GetProjectsController", () => {
	beforeEach(() => vi.clearAllMocks());
	it("should throw an error if the limit number of projects is less than 0", async () => {
		try {
			const sut = makeGetProjectsController();
			await sut.execute(-1);
		} catch (err) {
			expect(err).toThrow(Error);
			const error = err as InvalidDataLimitError;
			expect(error.message).toBe("Erro! O limite para o dado é inválido");
			expect(error.statusCode).toBe(HttpStatusCode.badRequest);
		}
	});

	it("should response correctly if not passed a limit number", async () => {
		const sut = makeGetProjectsController();
		executeMocked.mockReturnValueOnce({
			body: [
				...projectsMock,
				{
					href: "any_href",
					id: "any_id",
					techs: ["any_tech"],
					title: "any_title",
					description: "any_description",
				},
			],
			ok: true,
		});
		const response = await sut.execute();
		if (typeof response.body === "string") return;

		expect(response.body.length).toBeGreaterThan(PROJECTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
	it("should throw an unexpected error if ok is false", async () => {
		try {
			const sut = makeGetProjectsController();
			executeMocked.mockReturnValueOnce({
				body: null,
				ok: false,
			});
			await sut.execute();
		} catch (err) {
			expect(err).toThrow(Error);
			const error = err as UnexpectedError;
			expect(error.message).toBe(
				"Ocorreu um erro enquanto buscavamos pelos dados. Tente novamente"
			);
			expect(error.statusCode).toBe(HttpStatusCode.badRequest);
		}
	});
});
