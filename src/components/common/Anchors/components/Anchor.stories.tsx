import { Meta, StoryObj } from "@storybook/react";

import { Anchor } from ".";

type Story = StoryObj<typeof Anchor>;

const meta: Meta<typeof Anchor> = {
	title: "Components/Common/Anchors/Anchor",
	component: Anchor,
	tags: ["autodocs"],
	args: {
		href: "#",
		title: "Anchor",
		position: 1,
	},
};

export const Default: Story = {};

export default meta;
