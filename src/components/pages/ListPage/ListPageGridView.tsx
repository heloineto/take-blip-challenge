import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";

const ListPageGridView = () => {
	const { chatbots } = useListPage();

	if (!chatbots) {
		return <div></div>;
	}

	return (
		<div>
			<div className="mt-4 flex flex-wrap gap-6">
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
			<div className="flex flex-wrap gap-6">
				{chatbots.map((chatbot) => (
					<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
				))}
			</div>
		</div>
	);
};

export default ListPageGridView;
