import { vi } from "vitest";

import { IHttpClientGateway } from "@/core/domain/gateways";
import { HttpStatusCode } from "@/core/domain/helpers";

import { projectsMock } from "./projects-mock";

const success: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: true,
		statusCode: HttpStatusCode.ok,
		body: projectsMock,
	}),
};

const failure: IHttpClientGateway = {
	get: vi.fn().mockResolvedValue({
		ok: false,
		statusCode: HttpStatusCode.badRequest,
		body: null,
	}),
};

export const servicesMock = { success, failure };
