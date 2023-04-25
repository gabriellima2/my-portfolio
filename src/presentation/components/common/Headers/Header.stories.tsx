import { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
	title: "Components/Common/Headers/Header",
	component: Header,
	tags: ["autodocs"],
	args: {
		anchors: [
			{ href: "any_href", title: "Home" },
			{ href: "any_href", title: "Docs" },
			{ href: "any_href", title: "Blog" },
		],
	},
};

export const Default: Story = {
	render: (props) => <Header {...props} />,
};

export default meta;
