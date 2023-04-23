export class UnexpectedError extends Error {
	constructor(name: string) {
		super(`Ocorreu um erro enquanto buscavamos por ${name}. Tente novamente`);
		this.name = "UnexpectedError";
	}
}
