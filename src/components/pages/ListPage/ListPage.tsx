import { useEffect, useState } from "react";
import { ChatbotType } from "../../../@types/chatbots";
import { getChatbots } from "../../../lib/api";
import { ListPageContext } from "../../../lib/contexts/ListPageContext";
import ActionButton from "../../elements/ActionButton";
import Add from "../../icons/Add";
import ListPageGridView from "./ListPageGridView";
import ListPageHeader from "./ListPageHeader";
import ListPageListView from "./ListPageListView";
import { View } from "./types";

interface Props {}

const ProfilePage = (props: Props) => {
	const [view, setView] = useState<View>("grid");
	const [chatbots, setChatbots] = useState<ChatbotType[] | null>(null);

	useEffect(() => {
		getChatbots().then((data) => setChatbots(data));
	}, []);

	const value = { view, setView, chatbots, setChatbots };

	if (!chatbots) {
		return <div>Loading...</div>;
	}

	return (
		<ListPageContext.Provider value={value}>
			<div className="">
				<ListPageHeader />
				<h2 className="mt-[32px] text-3xl font-bold leading-10 text-[#607B99]">
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
