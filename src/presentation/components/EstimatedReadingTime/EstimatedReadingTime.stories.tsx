import { Meta, StoryObj } from "@storybook/react";

import { EstimatedReadingTime } from ".";
import { Typography } from "../common";

type Story = StoryObj<typeof EstimatedReadingTime>;

const meta: Meta<typeof EstimatedReadingTime> = {
	title: "Components/EstimatedReadingTime",
	component: EstimatedReadingTime,
	tags: ["autodocs"],
	args: {
		articleId: "article",
	},
	decorators: [
		(Story) => (
			<div className="flex flex-col gap-8">
				<article id="article" className="order-1 flex flex-col gap-4">
					<Typography.Title>Lorem ipsum dolor sit amet</Typography.Title>
					<Typography.Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Typography.Paragraph>
					<Typography.Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</Typography.Paragraph>
				</article>
				{Story()}
			</div>
		),
	],
};

export const Default: Story = {};

export default meta;
