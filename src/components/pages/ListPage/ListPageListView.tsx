import { AnimatePresence } from "framer-motion";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";

const ListPageListView = () => {
	const { chatbots } = useListPage();

	return (
		<div className="mt-16">
			<div className="flex flex-col gap-4">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="row" chatbot={chatbot} />
					))}
				</AnimatePresence>
			</div>
			<hr className="my-10" />
			<div className="flex flex-col gap-4">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="row" chatbot={chatbot} />
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ListPageListView;
