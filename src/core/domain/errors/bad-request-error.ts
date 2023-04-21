export class BadRequestError extends Error {
	constructor() {
		super("Ocorreu um erro, verifique sua conexão e/ou tente novamente!");
		this.name = "BadRequestError";
	}
}
