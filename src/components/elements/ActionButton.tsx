import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

interface Props extends ComponentProps<"button"> {}

const ActionButton = ({ className, ...restProps }: Props) => {
	return (
		<button
			type="button"
			className={classNames(
				"flex h-12 w-12 items-center justify-center rounded-full border border-transparent bg-sky-500 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
				className
			)}
			{...restProps}
		/>
	);
};

export default ActionButton;
