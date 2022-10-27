import { gql } from "@apollo/client";

import { client } from "../lib/client";
import { github } from "../lib/github";

import type { GithubInfo, UserInfoResponse } from "../types";

interface SkillsQuery {
	skills: [{ result: string[] }];
}

interface User {
	data: UserInfoResponse;
}

export class UserInformation implements User {
	public data: UserInfoResponse;
	constructor() {
		this.data = null;
	}

	private async getGeneralData() {
		try {
			const { data, error } = await github.request<GithubInfo>();

			if (error) throw new Error("Ocorreu um erro. Verifique sua conexão.");

			return data;
		} catch (err) {
			console.error(err);
			return;
		}
	}

	private async getSkills() {
		const getSkillsQuery = gql`
			query GetSkills {
				skills {
					result
				}
			}
		`;

		try {
			const { data, error } = await client.query<SkillsQuery>({
				query: getSkillsQuery,
			});

			if (error) throw new Error("Ocorreu um erro. Verifique sua conexão.");

			return data.skills[0].result;
		} catch (err) {
			console.error(err);
			return;
		}
	}

	public async execute() {
		const info = await this.getGeneralData();
		const skills = await this.getSkills();

		if (!info || !skills) {
			return (this.data = null);
		}

		this.data = { ...info, skills };
	}
}
