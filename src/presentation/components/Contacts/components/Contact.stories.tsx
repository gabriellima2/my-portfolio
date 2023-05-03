import { Meta, StoryObj } from "@storybook/react";

import { Contact } from ".";

type Story = StoryObj<typeof Contact>;

const meta: Meta<typeof Contact> = {
	title: "Components/Contacts/Contact",
	component: Contact,
	tags: ["autodocs"],
	args: {
		href: "any_href",
		title: "First",
		mask: "mailto:any_href",
		variants: "default",
	},
	argTypes: {
		variants: {
			control: {
				type: "inline-radio",
			},
		},
	},
};

export const Default: Story = {};

export default meta;
