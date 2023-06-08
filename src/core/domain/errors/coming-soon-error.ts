import { DefaultError } from "./default-error";
import { HttpStatusCode } from "../helpers";

export class ComingSoonError extends DefaultError {
	constructor() {
		super(
			HttpStatusCode.notFound,
			"Em breve você poderá explorar esse conteúdo!"
		);
		this.name = "ComingSoonError";
	}
}
