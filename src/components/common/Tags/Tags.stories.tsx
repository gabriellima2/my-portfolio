import { Meta, StoryObj } from "@storybook/react";

import { Tags } from ".";

type Story = StoryObj<typeof Tags>;

const meta: Meta<typeof Tags> = {
	title: "Components/Common/Tags",
	component: Tags,
	tags: ["autodocs"],
	args: {
		items: ["ReactJS", "Typescript", "TailwindCSS", "GraphQL"],
	},
};

export const Default: Story = {};

export default meta;
