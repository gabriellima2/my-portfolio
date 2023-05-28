import type { FetchEntity } from "@/core/domain/entities";
import type { HttpClientGateway } from "@/core/domain/gateways";

type Response<T> = { [key: string]: T | null };

type Service<T> = () => Promise<HttpClientGateway.Response<T>>;

export async function getData<T, R extends Response<T>>(
	service: Service<R>,
	key: keyof R
): Promise<FetchEntity<T>> {
	try {
		const response = await service();
		return { data: response.body[key] };
	} catch (err) {
		return { data: null, error: (err as Error).message };
	}
}
