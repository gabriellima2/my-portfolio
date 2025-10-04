'server-only'

import z from 'zod'

export const env = z
	.object({
		API_URL: z.url(),
		API_KEY: z.string(),
		CONTACTS: z.object({
			EMAIL: z.email(),
			GITHUB: z.url(),
			LINKEDIN: z.url(),
		}),
	})
	.parse({
		API_URL: process.env.API_URL,
		API_KEY: process.env.API_KEY,
		CONTACTS: {
			EMAIL: process.env.EMAIL,
			GITHUB: process.env.GITHUB,
			LINKEDIN: process.env.LINKEDIN,
		},
	})
