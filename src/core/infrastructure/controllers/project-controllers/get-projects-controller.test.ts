import { vi } from "vitest";

import { GetProjectsController } from ".";

import { HttpStatusCode } from "@/core/domain/helpers";
import { projectsMock } from "@/__mocks__/projects-mock";

const executeMocked = vi.fn();
const PROJECTS_LIMIT = projectsMock.length;
const makeGetProjectsController = () =>
	new GetProjectsController({ execute: executeMocked });

describe("GetProjectsController", () => {
	beforeEach(() => vi.clearAllMocks());
	const isError = (body: unknown) => typeof body === "string";

	describe("Success", () => {
		it("should response correctly without limit number", async () => {
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
			if (isError(response.body)) return;

			expect(response.body.length).toBeGreaterThan(PROJECTS_LIMIT);
			expect(response.statusCode).toBe(HttpStatusCode.ok);
			expect(response.ok).toBeTruthy();
		});
	});
	it("should response correctly with valid limit projects", async () => {
		const sut = makeGetProjectsController();
		executeMocked.mockReturnValueOnce({
			body: projectsMock,
			ok: true,
		});
		const response = await sut.execute();
		if (isError(response.body)) return;

		expect(response.body.length).toBeGreaterThan(PROJECTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
	describe("Errors", () => {
		it("should throw an InvalidDataLimitError with limit projects being less than 0", async () => {
			const sut = makeGetProjectsController();
			const response = await sut.execute(-1);
			if (isError(response.body)) return;

			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.badRequest);
			expect(response.body).toBe("Erro! O limite para o dado é inválido");
		});
		it("should throw an UnexpectedError with ok being false", async () => {
			const sut = makeGetProjectsController();
			executeMocked.mockReturnValueOnce({
				body: null,
				ok: false,
			});
			const response = await sut.execute();
			if (isError(response.body)) return;

			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.badRequest);
			expect(response.body).toBe(
				"Ocorreu um erro enquanto buscavamos pelos dados. Tente novamente"
			);
		});
		it("should throw an EmptyDataError with body being empty", async () => {
			const sut = makeGetProjectsController();
			executeMocked.mockReturnValueOnce({
				body: null,
				ok: true,
			});
			const response = await sut.execute();
			if (isError(response.body)) return;

			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.notFound);
			expect(response.body).toBe("Desculpe, não encontramos nenhum dado!");
		});
	});
});
