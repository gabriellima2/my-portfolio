import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from ".";

type Story = StoryObj<typeof Avatar>;

const meta: Meta<typeof Avatar> = {
	title: "Components/Common/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	args: {
		variants: "default",
		src: "https://avatars.githubusercontent.com/u/99509202?s=400&u=0ac27846f4d918622b30c5d5e686317fe44f8fdb&v=4",
		alt: "Foto de Gabriel Lima",
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
