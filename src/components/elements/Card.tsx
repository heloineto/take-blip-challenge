import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

const Card = ({ className, ...restProps }: ComponentProps<"div">) => {
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
