'server-only'

import { Project } from '../_types/projects'
import { env } from '@/env'

interface GetAllProjectsResponse {
	data: {
		projects: Project[]
	}
}

export async function getProjects(): Promise<Project[]> {
	const response = await fetch(env.API_URL as string, {
		method: 'POST',
		cache: 'force-cache',
		next: {
			revalidate: 3600, // 1 hour
		},
		headers: {
			Authorization: `Bearer ${env.API_KEY as string}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: `
  			query Projects {
          projects {
            id
            title
            description
            techs
            href
          }
        }
      `,
		}),
	})

	const json = (await response.json()) as GetAllProjectsResponse
	return json.data.projects
}
