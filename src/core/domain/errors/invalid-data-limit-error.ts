import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class InvalidDataLimitError extends DefaultError {
	constructor() {
		super(HttpStatusCode.badRequest, "Erro! O limite para o dado é inválido");
		this.name = "InvalidDataLimitError";
	}
}
