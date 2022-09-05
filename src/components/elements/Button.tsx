import type { ComponentProps } from "react";
import classNames from "../../lib/utils/classNames";

const Button = ({ className, ...restProps }: ComponentProps<"button">) => {
	return (
		<button
			type="button"
			className={classNames(
				"inline-flex items-center gap-2 rounded-lg border border-transparent bg-sky-500 py-2 px-4 font-bold text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
				className
			)}
			{...restProps}
		/>
	);
};

export default Button;
