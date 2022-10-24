import { HttpClient } from "../utils/HttpClient";

export const github = new HttpClient(
	`https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USER}`
);
