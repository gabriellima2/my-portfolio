import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class UnexpectedError extends DefaultError {
	constructor() {
		super(
			HttpStatusCode.badRequest,
			"Ocorreu um erro enquanto buscavamos pelos dados. Tente novamente"
		);
		this.name = "UnexpectedError";
	}
}
