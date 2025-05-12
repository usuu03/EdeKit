import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@components/button/Button";

import "@styles/index.css";

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"ghost",
				"link",
				"secondary",
			],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
		},
		isLoading: {
			control: "boolean",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Default Button",
		variant: "default",
		size: "default",
		isLoading: false,
	},
};

export const Destructive: Story = {
	args: {
		children: "Destructive Button",
		variant: "destructive",
		size: "default",
		isLoading: false,
	},
};

export const Outline: Story = {
	args: {
		children: "Outline Button",
		variant: "outline",
		size: "default",
		isLoading: false,
	},
};

export const Ghost: Story = {
	args: {
		children: "Ghost Button",
		variant: "ghost",
		size: "default",
		isLoading: false,
	},
};

export const Link: Story = {
	args: {
		children: "Link Button",
		variant: "link",
		size: "default",
		isLoading: false,
	},
};

export const Secondary: Story = {
	args: {
		children: "Secondary Button",
		variant: "secondary",
		size: "default",
		isLoading: false,
	},
};

export const Icon: Story = {
	args: {
		children: "🧞‍♂️",
		variant: "default",
		size: "icon",
		isLoading: false,
	},
};

export const Small: Story = {
	args: {
		children: "Small Button",
		variant: "default",
		size: "sm",
		isLoading: false,
	},
};

export const Large: Story = {
	args: {
		children: "Large Button",
		variant: "default",
		size: "lg",
		isLoading: false,
	},
};

export const Loading: Story = {
	args: {
		children: "Loading Button",
		variant: "default",
		size: "default",
		isLoading: true,
	},
};
