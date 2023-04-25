import { Meta, StoryObj } from "@storybook/react";

import { Title } from "./Title";

type Story = StoryObj<typeof Title>;

const meta: Meta<typeof Title> = {
	title: "Components/Common/Typography/Title",
	component: Title,
	tags: ["autodocs"],
	args: {
		children: "Lorem ipsum dolor",
	},
};

export const Default: Story = {};

export default meta;
