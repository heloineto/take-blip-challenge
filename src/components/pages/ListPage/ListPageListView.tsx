import { AnimatePresence } from "framer-motion";
import { useMemo } from "react";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Chatbot from "../../elements/Chatbot";
import divideChatbots from "./utils/divideChatbots";

const ListPageListView = () => {
	const { chatbots, favoriteNames, setFavoriteNames } = useListPage();

	const { favorites, rest } = useMemo(
		() => divideChatbots(chatbots, favoriteNames),
		[chatbots, favoriteNames]
	);

	return (
		<div className="mt-16">
			<div className="flex flex-col gap-4">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{favorites.map((chatbot) => (
						<Chatbot
							key={chatbot.name}
							variant="row"
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
			</div>
			<hr className="my-10" />
			<div className="flex flex-col gap-4">
				<AnimatePresence initial={false} mode={"popLayout"}>
					{rest.map((chatbot) => (
						<Chatbot
							key={chatbot.name}
							variant="row"
							chatbot={chatbot}
							onChangeFavorite={() => {
								setFavoriteNames((names) => [...names, chatbot.name]);
							}}
						/>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default ListPageListView;
