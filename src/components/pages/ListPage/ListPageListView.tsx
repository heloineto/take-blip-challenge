import { ChatbotType } from "../../../@types/chatbots";
import Chatbot from "../../elements/Chatbot";

interface Props {
	chatbots: ChatbotType[];
}

const ListPageListView = ({ chatbots }: Props) => {
	return (
		<div className="mt-16">
			<div className="flex flex-col gap-4">
				{chatbots.map((chatbot) => (
					<Chatbot key={chatbot.name} variant="row" chatbot={chatbot} />
				))}
			</div>
			<hr className="my-10" />
			<div className="flex flex-col gap-4">
				{chatbots.map((chatbot) => (
					<Chatbot key={chatbot.name} variant="row" chatbot={chatbot} />
				))}
			</div>
		</div>
	);
};

export default ListPageListView;
