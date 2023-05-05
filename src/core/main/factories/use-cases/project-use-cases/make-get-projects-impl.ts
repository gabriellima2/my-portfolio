import { GetProjectsImpl } from "@/core/infrastructure/use-cases";
import { makeHttpClientGatewayImpl } from "@/core/main/factories/gateways";

export const makeGetProjectsImpl = () => {
	const httpClientGatewayImpl = makeHttpClientGatewayImpl();
	return new GetProjectsImpl(httpClientGatewayImpl);
};
