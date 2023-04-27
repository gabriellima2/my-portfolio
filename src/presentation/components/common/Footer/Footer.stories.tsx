import { Meta, StoryObj } from "@storybook/react";

import { Footer } from ".";

type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
	title: "Components/Common/Footer",
	component: Footer,
	tags: ["autodocs"],
};

export const Default: Story = {};

export default meta;
