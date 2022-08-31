import ChatbotCard from "./ChatbotCard";
import ChatbotRow from "./ChatbotRow";
import { ChatbotProps } from "./types";

interface Props extends ChatbotProps {
	variant: "card" | "row";
}

const Chatbot = ({ variant, ...restProps }: Props) => {
	if (variant === "card") return <ChatbotCard {...restProps} />;

	return <ChatbotRow {...restProps} />;
};

export default Chatbot;
