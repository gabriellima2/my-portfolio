import { Meta, StoryObj } from "@storybook/react";

import { GoBackButton } from ".";

type Story = StoryObj<typeof GoBackButton>;

const meta: Meta<typeof GoBackButton> = {
	title: "Components/Buttons/GoBackButton",
	component: GoBackButton,
	tags: ["autodocs"],
	argTypes: {
		withLabelText: {
			defaultValue: true,
		},
	},
};

export const Default: Story = {};

export default meta;
