import { Meta, StoryObj } from "@storybook/react";

import { GroupByYear } from ".";

type Story = StoryObj<typeof GroupByYear>;

const meta: Meta<typeof GroupByYear> = {
	title: "Components/Common/GroupByYear",
	component: GroupByYear,
	tags: ["autodocs"],
	args: {
		year: new Date().getFullYear(),
		children:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
};

export const Default: Story = {};

export default meta;
