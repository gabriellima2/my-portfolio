import { vi } from "vitest";

import { GetPostsController } from "./get-posts-controller";

import { HttpStatusCode } from "@/core/domain/helpers";
import { postsMock } from "@/__mocks__/posts-mock";

const executeMocked = vi.fn();
const POSTS_LIMIT = postsMock.length;
const makeGetPostsController = () =>
	new GetPostsController({ execute: executeMocked });

describe("GetPostsController", () => {
	beforeEach(() => vi.clearAllMocks());
	const isError = (body: unknown) => typeof body === "string";

	describe("Success", () => {
		it("should response correctly without limit number", async () => {
			const sut = makeGetPostsController();
			executeMocked.mockReturnValueOnce({
				body: [...postsMock, ...postsMock],
				ok: true,
			});
			const response = await sut.execute();
			if (isError(response.body)) return;

			expect(response.body.length).toBeGreaterThan(POSTS_LIMIT);
			expect(response.statusCode).toBe(HttpStatusCode.ok);
			expect(response.ok).toBeTruthy();
		});
	});
	it("should response correctly with valid limit projects", async () => {
		const sut = makeGetPostsController();
		executeMocked.mockReturnValueOnce({
			body: postsMock,
			ok: true,
		});
		const response = await sut.execute();
		if (isError(response.body)) return;

		expect(response.body.length).toBeGreaterThan(POSTS_LIMIT);
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.ok).toBeTruthy();
	});
	describe("Errors", () => {
		it("should throw an InvalidDataLimitError with limit projects being less than 0", async () => {
			const sut = makeGetPostsController();
			const response = await sut.execute(-1);
			if (typeof response.body !== "string") return;

			expect(response.ok).toBeFalsy();
			expect(response.statusCode).toBe(HttpStatusCode.badRequest);
			expect(response.body).toBe("Erro! O limite para o dado é inválido");
		});
		it("should throw an UnexpectedError with ok being false", async () => {
			const sut = makeGetPostsController();
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
			const sut = makeGetPostsController();
			executeMocked.mockReturnValueOnce({
				body: { posts: null },
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
