import { Meta, StoryObj } from "@storybook/react";

import { ComingSoon } from ".";

type Story = StoryObj<typeof ComingSoon>;

const meta: Meta<typeof ComingSoon> = {
	title: "Components/ComingSoon",
	component: ComingSoon,
	tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
