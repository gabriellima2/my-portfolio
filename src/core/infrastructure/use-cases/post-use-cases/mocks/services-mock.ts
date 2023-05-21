import { vi } from "vitest";

import { IHttpClientGateway } from "@/core/domain/gateways";
import { HttpStatusCode } from "@/core/domain/helpers";

import { postsMock } from "@/__mocks__/posts-mock";

const success: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: true,
		statusCode: HttpStatusCode.ok,
		body: { posts: postsMock },
	}),
};

const failure: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: false,
		statusCode: HttpStatusCode.badRequest,
		body: { posts: null },
	}),
};

export const servicesMock = { success, failure };
