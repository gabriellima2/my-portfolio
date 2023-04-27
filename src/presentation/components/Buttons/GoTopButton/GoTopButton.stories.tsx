import { Meta, StoryObj } from "@storybook/react";

import { GoTopButton } from ".";

type Story = StoryObj<typeof GoTopButton>;

const meta: Meta<typeof GoTopButton> = {
	title: "Components/Buttons/GoTopButton",
	component: GoTopButton,
	tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
