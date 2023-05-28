import { Meta, StoryObj } from "@storybook/react";

import { Projects } from ".";

type Story = StoryObj<typeof Projects>;

const meta: Meta<typeof Projects> = {
	title: "Components/Projects",
	component: Projects,
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<div className="grid grid-cols-1 gap-12 sm:grid-cols-2">{Story()}</div>
		),
	],
	args: {
		projects: [
			{
				id: "01",
				href: "#",
				title: "First project title",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				techs: ["Tech1", "Tech2"],
			},
			{
				id: "02",
				href: "#",
				title: "Second project title",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
				techs: ["Tech1", "Tech2"],
			},
		],
	},
};

export const Default: Story = {};

export default meta;
