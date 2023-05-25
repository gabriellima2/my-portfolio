import { makeHttpClientGatewayImpl } from "@/core/main/factories/gateways";
import { PostServices } from "@/core/infrastructure/services";

export const makePostServices = () => {
	const httpClientGateway = makeHttpClientGatewayImpl();
	return new PostServices(httpClientGateway);
};
