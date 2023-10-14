import { Meta, StoryObj } from "@storybook/react";

import { Introduction } from ".";

type Story = StoryObj<typeof Introduction>;

const meta: Meta<typeof Introduction> = {
	title: "Components/Introduction",
	component: Introduction,
	tags: ["autodocs"],
	decorators: [
		(Story) => <div className="relative h-screen w-screen">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
