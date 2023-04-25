import { Meta, StoryObj } from "@storybook/react";

import { Display } from "./Display";

type Story = StoryObj<typeof Display>;

const meta: Meta<typeof Display> = {
	title: "Components/Common/Typography/Display",
	component: Display,
	tags: ["autodocs"],
	args: {
		children: "Lorem ipsum dolor",
	},
};

export const Default: Story = {};

export default meta;
