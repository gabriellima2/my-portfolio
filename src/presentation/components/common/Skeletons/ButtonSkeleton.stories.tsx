import { Meta, StoryObj } from "@storybook/react";

import { ButtonSkeleton } from ".";

type Story = StoryObj<typeof ButtonSkeleton>;

const meta: Meta<typeof ButtonSkeleton> = {
	title: "Components/common/Skeletons/ButtonSkeleton",
	component: ButtonSkeleton,
	tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
