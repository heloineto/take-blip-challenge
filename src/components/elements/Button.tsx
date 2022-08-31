import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

interface Props extends ComponentProps<"button"> {}

const Button = ({ className, ...restProps }: Props) => {
	return (
		<button
			className={classNames(
				"rounded-lg py-2 px-4 gap-2 inline-flex items-center border border-transparent text-white bg-sky-500 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500",
				className
			)}
			{...restProps}
		/>
	);
};

export default Button;
