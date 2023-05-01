import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class BadRequestError extends DefaultError {
	constructor() {
		super(
			HttpStatusCode.badRequest,
			"Ocorreu um erro, verifique sua conexão e/ou tente novamente!"
		);
		this.name = "BadRequestError";
	}
}
