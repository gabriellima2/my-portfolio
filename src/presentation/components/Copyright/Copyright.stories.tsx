import { Meta, StoryObj } from "@storybook/react";

import { Copyright } from ".";

type Story = StoryObj<typeof Copyright>;

const meta: Meta<typeof Copyright> = {
	title: "Components/Text/Copyright",
	component: Copyright,
	tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
