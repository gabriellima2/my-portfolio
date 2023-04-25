import { Meta, StoryObj } from "@storybook/react";

import { StackHeader } from ".";

type Story = StoryObj<typeof StackHeader>;

const meta: Meta<typeof StackHeader> = {
	title: "Components/Common/Headers/StackHeader",
	component: StackHeader,
	tags: ["autodocs"],
	parameters: {
		controls: { hideNoControlsWarning: true },
	},
};

export const Default: Story = {};

export default meta;
