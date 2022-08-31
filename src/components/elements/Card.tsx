import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

interface Props extends ComponentProps<"div"> {}

const Card = ({ className, ...restProps }: Props) => {
	return (
		<div
			className={classNames(
				"rounded-md bg-white shadow-[0px_2px_12px_rgba(96,123,153,0.15)]",
				className
			)}
			{...restProps}
		/>
	);
};

export default Card;
