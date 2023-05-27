export async function getData(service: any, method: string, key: string) {
	try {
		const response = await service[method]();
		return { data: response.body[key] };
	} catch (err) {
		return { data: null, error: (err as Error).message };
	}
}
