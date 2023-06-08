import { Meta, StoryObj } from "@storybook/react";

import { Profile } from ".";

type Story = StoryObj<typeof Profile>;

const additionals = {
	empty: null,
	filled: () => <small>Conteúdo Adicional</small>,
};

const meta: Meta<typeof Profile> = {
	title: "Components/Common/Profile",
	component: Profile,
	tags: ["autodocs"],
	args: {
		name: "Username",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		avatarSrc:
			"https://images.pexels.com/photos/16110027/pexels-photo-16110027/free-photo-of-dog.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
	},
	argTypes: {
		additional: {
			options: Object.keys(additionals),
			mapping: additionals,
			control: {
				type: "select",
				labels: {
					empty: "Empty",
					filled: "Filled",
				},
			},
		},
	},
	decorators: [
		(Story) => <div className="flex w-[50vw] max-w-[800px]">{Story()}</div>,
	],
};

export const Default: Story = {};

export default meta;
