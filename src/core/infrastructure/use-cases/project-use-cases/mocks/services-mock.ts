import { HttpStatusCode } from "@/core/domain/helpers/http-status-code";
import { vi } from "vitest";
import { projectsMock } from "./projects-mock";
import { IHttpClientGateway } from "@/core/domain/gateways/http-client-gateway";

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
