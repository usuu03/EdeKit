import type { Preview, Decorator, ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { useEffect } from "react";
import { useGlobals } from "@storybook/preview-api";

const withBackgroundSync: Decorator = (Story) => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [{ theme }] = useGlobals();

	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const body = document.body;

		if (theme === "dark") {
			body.className = "bg-black transition colors duration-500";
		} else {
			body.className = "bg-white transition-colors duration-500";
		}

		return () => {
			body.className = "";
		};
	}, [theme]);

	return <Story />;
};

const withTailwindPadding: Decorator = (Story) => {
	return (
		<div className="p-8">
			<Story />
		</div>
	);
};

export const decorators: Decorator[] = [
	withThemeByClassName<ReactRenderer>({
		themes: {
			light: "",
			dark: "dark",
		},
		defaultTheme: "light",
		parentSelector: "html",
	}),
	withBackgroundSync,
	withTailwindPadding,
];

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
