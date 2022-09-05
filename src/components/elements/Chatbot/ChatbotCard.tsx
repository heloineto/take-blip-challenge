import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import classNames from "../../../lib/utils/classNames";
import getColor from "../../../lib/utils/getColor";
import snakeCase from "../../../lib/utils/snakeCase";
import Card from "../Card";
import ChatbotStar from "./ChatbotStar";
import { ChatbotProps } from "./types";

const spring = {
	type: "spring",
	damping: 25,
	stiffness: 150,
};

const ChatbotCard = forwardRef<HTMLDivElement, ChatbotProps>(
	function ChatbotCard(
		{
			chatbot,
			favorite = false,
			className,
			onChangeFavorite,
			id,
			...restProps
		},
		ref
	) {
		const { name, type } = chatbot;

		return (
			<motion.div
				className={classNames("relative", className)}
				key={chatbot.name}
				layout
				transition={spring}
				initial={{ scale: 0, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0, opacity: 0 }}
				whileHover={{ scale: 1.1 }}
				ref={ref}
				{...restProps}
			>
				<motion.button
					className="absolute top-0 left-0 p-2"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.95 }}
					title={favorite ? "Remove from favorites" : "Add to favorites"}
					onClick={(event) => {
						event.preventDefault();
						onChangeFavorite();
					}}
				>
					<ChatbotStar favorite={favorite} />
				</motion.button>
				<Link to={`/chatbot/${snakeCase(name)}`}>
					<Card className="flex h-48 w-48 cursor-pointer flex-col items-center justify-center gap-4">
						<div
							className="h-12 w-12 rounded-full"
							style={{ backgroundColor: getColor(chatbot.name) }}
						></div>
						<div className="text-center">
							<h3 className="font-bold text-slate-600">{name}</h3>
							<p className="text-xs font-normal leading-5 text-slate-400">
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
