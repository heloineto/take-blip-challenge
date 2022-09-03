import { AnimatePresence, motion } from "framer-motion";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";

const spring = {
	type: "spring",
	damping: 25,
	stiffness: 120,
};

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
						<motion.div
							key={chatbot.name}
							layout
							transition={spring}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0, opacity: 0 }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<Chatbot
								className="flex-shrink-0"
								variant="card"
								chatbot={chatbot}
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
			<hr className="my-10" />
			<div className="flex flex-wrap gap-6">
				{chatbots.map((chatbot) => (
					<motion.div
						key={chatbot.name}
						layout
						transition={spring}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<Chatbot variant="card" chatbot={chatbot} />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default ListPageGridView;
