import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";

const ListPageListView = () => {
	const { chatbots } = useListPage();

	if (!chatbots) {
		return <div></div>;
	}

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
