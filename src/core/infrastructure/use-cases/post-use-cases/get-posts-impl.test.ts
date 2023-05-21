import { gql } from "@apollo/client";

import { GetPostsImpl } from "./get-posts-impl";
import { HttpStatusCode } from "@/core/domain/helpers";

import { postsMock } from "@/__mocks__/posts-mock";
import { servicesMock } from "./mocks/services-mock";

const query = gql`
	query GetPosts {
		posts {
			slug
			tags
			title
			content {
				html
			}
		}
	}
`;

const makeGetPostsSuccessImpl = () => new GetPostsImpl(servicesMock.success);
const makeGetPostsFailureImpl = () => new GetPostsImpl(servicesMock.failure);

describe("GetPostsImpl use-case", () => {
	it("should response correctly with success request", async () => {
		const sut = makeGetPostsSuccessImpl();
		const response = await sut.execute({ url: "any_url", body: query });

		expect(response.ok).toBeTruthy();
		expect(response.statusCode).toBe(HttpStatusCode.ok);
		expect(response.body.posts).toMatchObject(postsMock);
	});
	it("should response correctly with failure request", async () => {
		const sut = makeGetPostsFailureImpl();
		const response = await sut.execute({ url: "any_url", body: query });

		expect(response.ok).toBeFalsy();
		expect(response.statusCode).toBe(HttpStatusCode.badRequest);
		expect(response.body.posts).toBeNull();
	});
});
