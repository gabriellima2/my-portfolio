import { Meta, StoryObj } from "@storybook/react";

import { Code } from ".";

type Story = StoryObj<typeof Code>;

const meta: Meta<typeof Code> = {
	title: "Components/common/Code",
	component: Code,
	tags: ["autodocs"],
	args: {
		language: "js",
		children: "function() {\n  console.log('Hello World!')\n}",
	},
	decorators: [
		(Story) => <div className="w-[50vw] max-w-[400px]">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
