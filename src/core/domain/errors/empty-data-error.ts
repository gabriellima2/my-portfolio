export class EmptyDataError extends Error {
	constructor(name: string) {
		super(`Ocorreu um erro, não encontramos nenhum ${name}!`);
		this.name = "EmptyDataError";
	}
}
