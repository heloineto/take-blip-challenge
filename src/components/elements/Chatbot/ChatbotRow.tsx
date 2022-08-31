import { motion } from "framer-motion";
import classNames from "../../../lib/utils/classNames";
import formatDate from "../../../lib/utils/formatDate";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";
import { ChatbotProps } from "./types";

const ChatbotRow = ({
	chatbot,
	favorite = false,
	className,
	...restProps
}: ChatbotProps) => {
	const { name, created } = chatbot;

	return (
		<motion.div
			className={classNames("flex items-center gap-5", className)}
			{...restProps}
		>
			<ChatbotStar className="" favorite={favorite} />
			<Card className="relative flex h-[60px] flex-grow items-center justify-between gap-4 px-6">
				<div className="flex items-center gap-2">
					<div className="h-7 w-7 rounded-full bg-sky-500" />
					<h3 className="font-bold text-[#52636C]">{name}</h3>
				</div>
				<p className="text-xs font-normal leading-5 text-[#738192]">
					{formatDate(new Date(created))}
				</p>
			</Card>
		</motion.div>
	);
};

export default ChatbotRow;
