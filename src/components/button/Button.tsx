import type React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../utils/util";

const buttonVariants = cva(
	"font-family-sans inline-flex items-center justify-center border-0 rounded-md text-md font-medium transition-colors duration-500 focus:outline-none focus:ring-1 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
	{
		variants: {
			variant: {
				default:
					"bg-primary-edekit shadow-md hover:bg-primary-edekit-dark dark:bg-primary-edekit-dark",
				destructive:
					"bg-red-700 text-white shadow-xs hover:bg-red-800 focus-visible:ring-red-500",
				outline:
					"border border-primary-lightgrey text-primary-charcoal hover:bg-primary-lightgrey hover:border-primary-charcoal",
				secondary:
					"bg-secondary-services text-primary-charcoal hover:bg-secondary-services-dark",
				ghost: "bg-transparent text-primary-techary hover:bg-primary-lightgrey",
				link: "bg-transparent text-secondary-resources hover:text-secondary-resources-dark underline",
			},
			size: {
				default: "h-9 px-4 py-2 has-[>svg]:px-3",
				sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
				lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
				icon: "size-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
	return (
		<button
			{...props}
			className={cn(
				buttonVariants({ variant: props.variant, size: props.size }),
				props.className,
			)}
			disabled={props.isLoading || props.disabled}
		>
			{props.isLoading ? "Loading..." : props.children}
		</button>
	);
};

export { Button };
