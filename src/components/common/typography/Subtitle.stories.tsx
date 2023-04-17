import { Meta, StoryObj } from "@storybook/react";

import { Subtitle } from "./Subtitle";

type Story = StoryObj<typeof Subtitle>;

const meta: Meta<typeof Subtitle> = {
	title: "Components/Common/Typography/Subtitle",
	component: Subtitle,
	tags: ["autodocs"],
	args: {
		children: "Lorem ipsum dolor",
		as: "h2",
		size: "default",
	},
	argTypes: {
		as: {
			control: {
				type: "select",
			},
		},
		size: {
			control: {
				type: "inline-radio",
			},
		},
	},
};

export const Default: Story = {};

export default meta;
