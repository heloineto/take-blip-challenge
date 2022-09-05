import { useEffect, useState } from "react";
import { ChatbotType } from "../../../@types/chatbots";
import { getChatbots } from "../../../lib/api";
import { ListPageContext } from "../../../lib/contexts/ListPageContext";
import useLocalStorage from "../../../lib/hooks/useLocalStorage";
import ActionButton from "../../elements/ActionButton";
import Add from "../../icons/Add";
import ListPageGridView from "./ListPageGridView";
import ListPageHeader from "./ListPageHeader";
import ListPageListView from "./ListPageListView";
import ListPageLoading from "./ListPageLoading";
import { View } from "./types";

const ProfilePage = () => {
	const [view, setView] = useState<View>("grid");

	const [chatbots, setChatbots] = useState<ChatbotType[] | null>(null);
	const [untouchedChatbots, setUntouchedChatbots] = useState<
		ChatbotType[] | null
	>(null);
	const [error, setError] = useState<unknown | null>(null);
	const loading = chatbots === null;

	const [favoriteNames, setFavoriteNames] = useLocalStorage<string[]>(
		"favoriteNames",
		[]
	);

	useEffect(() => {
		getChatbots()
			.then((data) => {
				setChatbots(data);
				setUntouchedChatbots(data);
			})
			.catch((error) => {
				setError(error);
			});
	}, []);

	if (loading) {
		return <ListPageLoading />;
	}

	const value = {
		view,
		setView,
		chatbots,
		setChatbots,
		untouchedChatbots,
		favoriteNames,
		setFavoriteNames,
	};

	return (
		<ListPageContext.Provider value={value}>
			<div className="py-8">
				<ListPageHeader />
				<h2 className="mt-8 text-3xl font-bold leading-10 text-[#607B99]">
					Favorites
				</h2>
				{view === "grid" ? <ListPageGridView /> : <ListPageListView />}
				<ActionButton className="fixed bottom-4 right-8">
					<Add />
				</ActionButton>
			</div>
		</ListPageContext.Provider>
	);
};

export default ProfilePage;
