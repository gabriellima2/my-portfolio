import { Meta, StoryObj } from "@storybook/react";

import { Contacts } from ".";

type Story = StoryObj<typeof Contacts>;

const meta: Meta<typeof Contacts> = {
	title: "Components/Contacts",
	component: Contacts,
	tags: ["autodocs"],
	args: {
		contacts: [
			{ href: "any_href", title: "First", mask: "mailto:any_href" },
			{ href: "any_href", title: "Second" },
			{ href: "any_href", title: "Third" },
		],
		variants: "default",
		className: "!flex-row",
	},
};

export const Default: Story = {};

export default meta;
