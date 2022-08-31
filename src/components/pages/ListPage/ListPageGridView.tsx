import { ChatbotType } from "../../../@types/chatbots";
import Chatbot from "../../elements/Chatbot";

interface Props {
	chatbots: ChatbotType[];
}

const ListPageGridView = ({ chatbots }: Props) => {
	return (
		<div>
			<div className="mt-4 flex gap-6 overflow-x-scroll">
				{chatbots.map((chatbot) => (
					<Chatbot
						key={chatbot.name}
						className="flex-shrink-0"
						variant="card"
						chatbot={chatbot}
					/>
				))}
			</div>
			<hr className="my-10" />
			<div className="flex gap-6">
				{chatbots.map((chatbot) => (
					<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
				))}
			</div>
		</div>
	);
};

export default ListPageGridView;
