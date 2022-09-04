import { motion } from "framer-motion";
import { forwardRef } from "react";
import classNames from "../../../lib/utils/classNames";
import formatDate from "../../../lib/utils/formatDate";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";
import { ChatbotProps } from "./types";

const spring = {
	type: "spring",
	damping: 25,
	stiffness: 120,
};

const ChatbotRow = forwardRef<HTMLDivElement, ChatbotProps>(function ChatbotRow(
	{ chatbot, favorite = false, className, ...restProps },
	ref
) {
	const { name, created } = chatbot;

	return (
		<motion.div
			className={classNames("flex items-center gap-5", className)}
			key={chatbot.name}
			layout
			transition={spring}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			exit={{ scale: 0, opacity: 0 }}
			whileHover={{ scale: 1.025 }}
			whileTap={{ scale: 0.975 }}
			ref={ref}
			{...restProps}
		>
			<ChatbotStar className="" favorite={favorite} />
			<Card className="relative flex h-[3.75rem] flex-grow items-center justify-between gap-4 px-6">
				<div className="flex items-center gap-2">
					<div className="h-7 w-7 rounded-full bg-sky-500" />
					<h3 className="font-bold text-slate-600">{name}</h3>
				</div>
				<p className="text-xs font-normal leading-5 text-slate-400">
					{formatDate(new Date(created))}
				</p>
			</Card>
		</motion.div>
	);
});

export default ChatbotRow;
