import { vi } from "vitest";

import {
	EmptyDataError,
	InvalidDataLimitError,
	UnexpectedError,
} from "@/core/domain/errors";

import { GetProjectsController } from "./get-projects-controller";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "@/__mocks__/projects-mock";

const executeMocked = vi.fn();
const PROJECTS_LIMIT = projectsMock.length;
const makeGetProjectsController = () =>
	new GetProjectsController({ execute: executeMocked });

describe("GetProjectsController", () => {
	beforeEach(() => vi.clearAllMocks());
	describe("Errors", () => {
		it("should throw an InvalidDataLimitError if the limit number of projects is less than 0", async () => {
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
		it("should throw an UnexpectedError if ok is false", async () => {
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
		it("should throw an EmptyDataError if body is empty", async () => {
			try {
				const sut = makeGetProjectsController();
				executeMocked.mockReturnValueOnce({
					body: null,
					ok: true,
				});
				await sut.execute();
			} catch (err) {
				expect(err).toThrow(Error);
				const error = err as EmptyDataError;
				expect(error.message).toBe("Desculpe, não encontramos nenhum dado!");
				expect(error.statusCode).toBe(HttpStatusCode.notFound);
			}
		});
	});
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
			if (typeof response.body === "string") return;

			expect(response.body.length).toBeGreaterThan(PROJECTS_LIMIT);
			expect(response.statusCode).toBe(HttpStatusCode.ok);
			expect(response.ok).toBeTruthy();
		});
	});
	it("should response correctly with limit number valid", async () => {
		const sut = makeGetProjectsController();
		executeMocked.mockReturnValueOnce({
			body: projectsMock,
			ok: true,
		});
		const response = await sut.execute();
		if (typeof response.body === "string") return;

		expect(response.body.length).toBeGreaterThan(PROJECTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
});
