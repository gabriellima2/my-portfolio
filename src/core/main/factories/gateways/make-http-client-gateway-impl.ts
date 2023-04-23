import { HttpClientGatewayImpl } from "@/core/infrastructure/gateways";

export const makeHttpClientGatewayImpl = () => new HttpClientGatewayImpl();
