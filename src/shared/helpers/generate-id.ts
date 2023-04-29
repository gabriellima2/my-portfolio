import { randomBytes } from "crypto";

export function generateID(numberOfBytes = 20): string {
	return randomBytes(numberOfBytes).toString("hex");
}
