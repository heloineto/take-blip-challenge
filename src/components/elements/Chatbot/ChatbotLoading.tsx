import { ComponentProps } from "react";
import classNames from "../../../lib/utils/classNames";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";

interface Props extends ComponentProps<"div"> {
	favorite?: boolean;
}

const ChatbotLoading = ({
	favorite = false,
	className,
	...restProps
}: Props) => {
	return (
		<div className={classNames("", className)} {...restProps}>
			<Card className="relative flex h-48 w-48 cursor-pointer flex-col items-center justify-center gap-4">
				<ChatbotStar className="absolute top-2 left-2" favorite={favorite} />
				<div className="h-12 w-12 animate-pulse rounded-full bg-slate-200"></div>
				<div className="flex animate-pulse flex-col items-center gap-2">
					<div className="h-5 w-36 rounded-full bg-slate-200" />
					<div className="h-4 w-20 rounded-full bg-slate-200" />
				</div>
			</Card>
		</div>
	);
};

export default ChatbotLoading;
