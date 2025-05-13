import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: {
				docs: false,
			},
		},
		"@storybook/addon-themes",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/preview-api",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
};
export default config;
