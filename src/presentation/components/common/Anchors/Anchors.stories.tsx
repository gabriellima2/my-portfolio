import { Meta, StoryObj } from "@storybook/react";

import { Anchors } from ".";

type Story = StoryObj<typeof Anchors>;

const meta: Meta<typeof Anchors> = {
	title: "Components/Common/Anchors/Anchors",
	component: Anchors,
	tags: ["autodocs"],
	args: {
		anchors: [
			{ href: "any_href", title: "First" },
			{ href: "any_href", title: "Second" },
			{ href: "any_href", title: "Third" },
		],
	},
};

export const Default: Story = {};

export default meta;
