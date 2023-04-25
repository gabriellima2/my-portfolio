import { Meta, StoryObj } from "@storybook/react";

import { Paragraph } from "./Paragraph";

type Story = StoryObj<typeof Paragraph>;

const meta: Meta<typeof Paragraph> = {
	title: "Components/Common/Typography/Paragraph",
	component: Paragraph,
	tags: ["autodocs"],
	args: {
		children: "Lorem ipsum dolor",
	},
};

export const Default: Story = {};

export default meta;
