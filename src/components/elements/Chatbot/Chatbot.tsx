import { forwardRef } from "react";
import ChatbotCard from "./ChatbotCard";
import ChatbotRow from "./ChatbotRow";
import { ChatbotProps } from "./types";
interface Props extends ChatbotProps {
	variant: "card" | "row";
}

const Chatbot = forwardRef<HTMLDivElement, Props>(function Chatbot(
	{ variant, ...restProps },
	ref
) {
	if (variant === "card") return <ChatbotCard {...restProps} ref={ref} />;

	return <ChatbotRow {...restProps} ref={ref} />;
});

export default Chatbot;
