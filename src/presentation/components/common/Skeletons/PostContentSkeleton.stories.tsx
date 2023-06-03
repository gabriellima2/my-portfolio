import { Meta, StoryObj } from "@storybook/react";

import { PostContentSkeleton } from ".";

type Story = StoryObj<typeof PostContentSkeleton>;

const meta: Meta<typeof PostContentSkeleton> = {
	title: "Components/common/Skeletons/PostContentSkeleton",
	component: PostContentSkeleton,
	tags: ["autodocs"],
	decorators: [
		(Story) => <div className="w-[50vw] max-w-[400px]">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
