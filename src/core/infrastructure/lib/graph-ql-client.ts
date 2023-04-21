import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphQLClient = new ApolloClient({
	uri: process.env.NEXT_PUBLIC_API_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
	},
});

export type GraphQLClient = typeof graphQLClient;
