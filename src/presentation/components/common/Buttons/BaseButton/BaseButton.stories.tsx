import { Meta, StoryObj } from "@storybook/react";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "phosphor-react";

import { BaseButton } from "..";

type Story = StoryObj<typeof BaseButton>;

const icons = {
	empty: null,
	ArrowUp: () => <ArrowUp />,
	ArrowDown: () => <ArrowDown />,
	ArrowLeft: () => <ArrowLeft />,
	ArrowRight: () => <ArrowRight />,
};

const meta: Meta<typeof BaseButton> = {
	title: "Components/Common/Buttons/BaseButton",
	component: BaseButton,
	tags: ["autodocs"],
	args: {
		as: "button",
		variants: "default",
		children: "Label",
	},
	argTypes: {
		as: {
			control: {
				type: "select",
			},
		},
		variants: {
			control: {
				type: "inline-radio",
			},
		},
		rightIcon: {
			options: Object.keys(icons),
			mapping: icons,
			control: {
				type: "select",
				labels: {
					empty: "Empty",
					ArrowUp: "Arrow Up",
					ArrowDown: "Arrow Down",
					ArrowLeft: "Arrow Left",
					ArrowRight: "Arrow Right",
				},
			},
		},
	},
};

export const Default: Story = {};

export default meta;
