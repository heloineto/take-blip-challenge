import classNames from "../../lib/utils/classNames";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {}

const Card = ({ className, ...restProps }: Props) => {
	return (
		<div
			className={classNames(
				"flex h-48 w-48 flex-col items-center justify-center gap-4 rounded-md bg-white shadow-[0px_2px_12px_rgba(96,123,153,0.15)]",
				className
			)}
			{...restProps}
		/>
	);
};

export default Card;
