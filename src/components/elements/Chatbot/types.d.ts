import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { ChatbotType } from "../../../@types/chatbots";
export interface ChatbotProps extends ComponentProps<typeof motion.div> {
	favorite?: boolean;
	onChangeFavorite: () => void;
	chatbot: ChatbotType;
}
