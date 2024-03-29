import type { Preview } from "@storybook/react";
import "../src/shared/styles/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
		layout: "centered"
  },
};

export default preview;
