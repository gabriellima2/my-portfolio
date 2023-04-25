import { Meta, StoryObj } from "@storybook/react";

import { TextGroup } from ".";

type Story = StoryObj<typeof TextGroup>;

const meta: Meta<typeof TextGroup> = {
	title: "Components/Common/Text/TextGroup",
	component: TextGroup,
	tags: ["autodocs"],
	args: {
		title: "Lorem ipsum dolor",
		paragraphs: [
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		],
	},
};

export const Default: Story = {
	render: (props) => <TextGroup {...props} />,
};

export default meta;
