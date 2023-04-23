import { GetProjectsImpl } from "@/core/infrastructure/use-cases/project-use-cases";
import { makeHttpClientGatewayImpl } from "@/core/main/factories/gateways/make-http-client-gateway-impl";

export const makeGetProjectsImpl = () => {
	const httpClientGatewayImpl = makeHttpClientGatewayImpl();
	return new GetProjectsImpl(httpClientGatewayImpl);
};
