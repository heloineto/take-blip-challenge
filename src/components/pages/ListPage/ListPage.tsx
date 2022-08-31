import { useState } from "react";
import { ListPageContext } from "../../../lib/contexts/ListPageContext";
import chatbots from "../../../lib/mocks/chatbots";
import ActionButton from "../../elements/ActionButton";
import ListPageGridView from "./ListPageGridView";
import ListPageHeader from "./ListPageHeader";
import ListPageListView from "./ListPageListView";
import { View } from "./types";

interface Props {}

const ProfilePage = (props: Props) => {
	const [view, setView] = useState<View>("grid");

	chatbots;

	const value = { view, setView };

	return (
		<ListPageContext.Provider value={value}>
			<div className="">
				<ListPageHeader />
				<h2 className="mt-[32px] text-3xl font-bold leading-10 text-[#607B99]">Favorites</h2>
				{view === "grid" ? (
					<ListPageGridView chatbots={chatbots} />
				) : (
					<ListPageListView chatbots={chatbots} />
				)}
				<ActionButton className="absolute bottom-4 right-8" />
			</div>
		</ListPageContext.Provider>
	);
};

export default ProfilePage;
