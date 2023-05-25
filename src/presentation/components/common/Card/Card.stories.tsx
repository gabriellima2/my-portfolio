import { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

type Story = StoryObj<typeof Card>;

const meta: Meta<typeof Card> = {
	title: "Components/Common/Card",
	component: Card,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="center--row">
				<div className="w-[70%]">{Story()}</div>
			</div>
		),
	],
	args: {
		additional: () => <p>Lorem Ipsum</p>,
		title: "Lorem ipsum dolor sit amet",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		hasArrowIcon: true,
	},
};

export const Default: Story = {};

export default meta;
