import { Meta, StoryObj } from "@storybook/react";

import { PostsGroupedByYear } from ".";

type Story = StoryObj<typeof PostsGroupedByYear>;

const CURRENT_YEAR = new Date().getFullYear();
const LAST_YEAR = CURRENT_YEAR - 1;

const meta: Meta<typeof PostsGroupedByYear> = {
	title: "Components/PostsGroupedByYear",
	component: PostsGroupedByYear,
	tags: ["autodocs"],
	args: {
		posts: [
			{
				title: "Lorem ipsum dolor sit amet",
				slug: "lorem-ipsum-dolor-sit-amet-1",
				publishedAt: `${CURRENT_YEAR}-06-17`,
			},
			{
				title: "Lorem ipsum dolor sit amet",
				slug: "lorem-ipsum-dolor-sit-amet-2",
				publishedAt: `${LAST_YEAR}-06-17`,
			},
			{
				title: "Lorem ipsum dolor sit amet",
				slug: "lorem-ipsum-dolor-sit-amet-3",
				publishedAt: `${CURRENT_YEAR}-06-17`,
			},
		],
	},
};

export const Default: Story = {};

export default meta;
