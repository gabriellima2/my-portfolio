import { vi } from "vitest";

import { IHttpClientGateway } from "@/core/domain/gateways";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "@/__mocks__/projects-mock";

const success: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: true,
		statusCode: HttpStatusCode.ok,
		body: { projects: projectsMock },
	}),
};

const failure: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: false,
		statusCode: HttpStatusCode.badRequest,
		body: { projects: null },
	}),
};

export const servicesMock = { success, failure };
