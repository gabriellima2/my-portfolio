import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphQLClient = new ApolloClient({
	uri: process.env.API_URL,
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Bearer ${process.env.API_TOKEN}`,
	},
});

export type GraphQLClient = typeof graphQLClient;
