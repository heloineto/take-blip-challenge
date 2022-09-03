import { AnimatePresence } from "framer-motion";
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
				<AnimatePresence initial={false} mode={"popLayout"}>
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
					))}
				</AnimatePresence>
			</div>
			<hr className="my-10" />
			<div className="flex flex-wrap gap-6">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ListPageGridView;
