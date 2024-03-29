import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class EmptyDataError extends DefaultError {
	constructor() {
		super(
			HttpStatusCode.notFound,
			"Desculpe, não encontramos nenhuma informação!"
		);
		this.name = "EmptyDataError";
	}
}
