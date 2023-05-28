import { Meta, StoryObj } from "@storybook/react";

import { Posts } from ".";

type Story = StoryObj<typeof Posts>;

const meta: Meta<typeof Posts> = {
	title: "Components/Posts",
	component: Posts,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="grid grid-cols-1 gap-12 sm:grid-cols-2">{Story()}</div>
		),
	],
	args: {
		posts: [
			{
				title: "First post title",
				publishedAt: "2023-06-17",
				slug: "first-post-slug",
			},
			{
				title: "Second post title",
				publishedAt: "2023-06-18",
				slug: "second-post-slug",
			},
		],
	},
};

export const Default: Story = {};

export default meta;
