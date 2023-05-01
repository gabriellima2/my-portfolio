import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class EmptyDataError extends DefaultError {
	constructor() {
		super(HttpStatusCode.notFound, "Desculpe, não encontramos nenhum dado!");
		this.name = "EmptyDataError";
	}
}
