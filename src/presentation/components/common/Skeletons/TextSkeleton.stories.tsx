import { Meta, StoryObj } from "@storybook/react";

import { TextSkeleton } from ".";

type Story = StoryObj<typeof TextSkeleton>;

const meta: Meta<typeof TextSkeleton> = {
	title: "Components/common/Skeletons/TextSkeleton",
	component: TextSkeleton,
	tags: ["autodocs"],
	args: {
		size: "default",
	},
	decorators: [
		(Story) => <div className="w-[50vw] max-w-[400px]">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
