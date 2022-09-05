import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";
import divideChatbots from "./utils/divideChatbots";

const ListPageGridView = () => {
	const { chatbots, favoriteNames, setFavoriteNames } = useListPage();

	const { favorites, rest } = useMemo(
		() => divideChatbots(chatbots, favoriteNames),
		[chatbots, favoriteNames]
	);

	return (
		<div>
			<ul className="mt-4 flex flex-wrap gap-6">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{favorites.map((chatbot) => (
						<Chatbot
							key={chatbot.name}
							variant="card"
							chatbot={chatbot}
							favorite
							onChangeFavorite={() => {
								setFavoriteNames((names) =>
									names.filter((name) => name !== chatbot.name)
								);
							}}
						/>
					))}
				</AnimatePresence>
			</ul>
			<hr className="my-10" />
			<ul className="flex flex-wrap gap-6">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{rest.map((chatbot) => (
						<Chatbot
							key={chatbot.name}
							variant="card"
							chatbot={chatbot}
							onChangeFavorite={() => {
								setFavoriteNames((names) => [...names, chatbot.name]);
							}}
						/>
					))}
				</AnimatePresence>
			</ul>
		</div>
	);
};

export default ListPageGridView;
