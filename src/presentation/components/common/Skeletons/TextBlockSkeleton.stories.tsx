import { Meta, StoryObj } from "@storybook/react";

import { TextBlockSkeleton } from ".";

type Story = StoryObj<typeof TextBlockSkeleton>;

const meta: Meta<typeof TextBlockSkeleton> = {
	title: "Components/common/Skeletons/TextBlockSkeleton",
	component: TextBlockSkeleton,
	tags: ["autodocs"],
	args: {
		size: "default",
		lines: 5,
		lastLineInTheMiddle: true,
	},
	decorators: [
		(Story) => <div className="w-[50vw] max-w-[400px]">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
