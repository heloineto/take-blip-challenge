import Card from "../Card";
import ChatbotStar from "./ChatbotStar";

interface Props {
	favorite?: boolean;
}

const Chatbot = ({ favorite = false }: Props) => {
	return (
		<Card className="relative">
			<ChatbotStar className="absolute top-2 left-2" favorite={favorite} />
			<div className="h-12 w-12 rounded-full bg-sky-500"></div>
			<div className="text-center">
				<h3 className="font-bold text-[#52636C]">Bot name</h3>
				<p className="text-xs font-normal leading-5 text-[#738192]">Builder</p>
			</div>
		</Card>
	);
};

export default Chatbot;
