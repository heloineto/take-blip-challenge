import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import classNames from "../../../lib/utils/classNames";
import snakeCase from "../../../lib/utils/snakeCase";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";
import { ChatbotProps } from "./types";

const spring = {
	type: "spring",
	damping: 25,
	stiffness: 120,
};

const ChatbotCard = forwardRef<HTMLDivElement, ChatbotProps>(
	function ChatbotCard(
		{ chatbot, favorite = false, className, id, ...restProps },
		ref
	) {
		const { name, type } = chatbot;

		return (
			<motion.div
				className={classNames("", className)}
				key={chatbot.name}
				layout
				transition={spring}
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0, opacity: 0 }}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				ref={ref}
				{...restProps}
			>
				<Link to={`/chatbot/${snakeCase(name)}`}>
					<Card className="relative flex h-48 w-48 cursor-pointer flex-col items-center justify-center gap-4">
						<ChatbotStar
							className="absolute top-2 left-2"
							favorite={favorite}
						/>
						<div className="h-12 w-12 rounded-full bg-sky-500"></div>
						<div className="text-center">
							<h3 className="font-bold text-[#52636C]">{name}</h3>
							<p className="text-xs font-normal leading-5 text-[#738192]">
								{type}
							</p>
						</div>
					</Card>
				</Link>
			</motion.div>
		);
	}
);

export default ChatbotCard;
