import { Meta, StoryObj } from "@storybook/react";

import { ToggleThemeButton } from ".";
import { ThemeContext } from "@/shared/contexts/theme-context";

type Story = StoryObj<typeof ToggleThemeButton>;

const meta: Meta<typeof ToggleThemeButton> = {
	title: "Components/Common/Buttons/ToggleThemeButton",
	component: ToggleThemeButton,
	tags: ["autodocs"],
	parameters: {
		controls: { hideNoControlsWarning: true },
	},
};

export const Light: Story = {
	render: () => (
		<ThemeContext.Provider
			value={{ currentTheme: "light", handleToggleTheme: () => null }}
		>
			<ToggleThemeButton />
		</ThemeContext.Provider>
	),
};

export const Dark: Story = {
	render: () => (
		<ThemeContext.Provider
			value={{ currentTheme: "dark", handleToggleTheme: () => null }}
		>
			<ToggleThemeButton />
		</ThemeContext.Provider>
	),
};

export default meta;
