import { motion } from "framer-motion";
import classNames from "../../../lib/utils/classNames";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";
import { ChatbotProps } from "./types";

const ChatbotCard = ({
	chatbot,
	favorite = false,
	className,
	...restProps
}: ChatbotProps) => {
	const { name, type } = chatbot;

	return (
		<motion.div className={classNames("", className)} {...restProps}>
			<Card className="relative flex h-48 w-48 flex-col items-center justify-center gap-4">
				<ChatbotStar className="absolute top-2 left-2" favorite={favorite} />
				<div className="h-12 w-12 rounded-full bg-sky-500"></div>
				<div className="text-center">
					<h3 className="font-bold text-[#52636C]">{name}</h3>
					<p className="text-xs font-normal leading-5 text-[#738192]">{type}</p>
				</div>
			</Card>
		</motion.div>
	);
};

export default ChatbotCard;
