import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

const ActionButton = ({
	className,
	...restProps
}: ComponentProps<"button">) => {
	return (
		<button
			type="button"
			className={classNames(
				"flex h-12 w-12 items-center justify-center rounded-full border border-transparent bg-sky-500 text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
				className
			)}
			style={{
				filter:
					"drop-shadow(0px 0px 4px rgba(96, 123, 153, 0.2)) drop-shadow(0px 8px 12px rgba(96, 123, 153, 0.2))",
			}}
			{...restProps}
		/>
	);
};

export default ActionButton;
