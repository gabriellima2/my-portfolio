import { makeHttpClientGatewayImpl } from "@/core/main/factories/gateways";
import { ProjectServices } from "@/core/infrastructure/services";

export const makeProjectServices = () => {
	const httpClientGateway = makeHttpClientGatewayImpl();
	return new ProjectServices(httpClientGateway);
};
