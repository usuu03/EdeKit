import type React from "react";
import { cva } from "class-variance-authority";

const buttonVariants = cva({});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
	return <div>Button</div>;
};

export { Button };
