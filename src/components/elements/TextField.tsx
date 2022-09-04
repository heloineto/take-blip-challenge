import type { ComponentProps } from "react";
import { useId } from "react";
import classNames from "../../lib/utils/classNames";
interface Props extends ComponentProps<"input"> {
	label?: string;
}

const TextField = ({ name, label, className, ...restProps }: Props) => {
	const id = useId();

	return (
		<div>
			<label htmlFor={id} className="sr-only">
				{label}
			</label>
			<input
				type="email"
				name={name}
				id={id}
				className={classNames(
					"block w-full rounded-lg border border-slate-200 text-sm font-semibold focus:border-sky-500 focus:ring-sky-500",
					className
				)}
				placeholder={label}
				{...restProps}
			/>
		</div>
	);
};

export default TextField;
