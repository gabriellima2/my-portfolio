import { Meta, StoryObj } from "@storybook/react";

import { Date } from ".";

type Story = StoryObj<typeof Date>;

const meta: Meta<typeof Date> = {
	title: "Components/common/Date",
	component: Date,
	tags: ["autodocs"],
	args: {
		date: "2023-06-17",
		label: "Data",
	},
};

export const Default: Story = {};

export default meta;
