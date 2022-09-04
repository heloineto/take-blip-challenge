import { useEffect, useState } from "react";
import { ChatbotType } from "../../../@types/chatbots";
import { getChatbots } from "../../../lib/api";
import ActionButton from "../../elements/ActionButton";
import Chatbot from "../../elements/Chatbot";
import Add from "../../icons/Add";
import ListPageHeader from "./ListPageHeader";
import { View } from "./types";

const ProfilePageLoading = () => {
	const [view, setView] = useState<View>("grid");
	const [chatbots, setChatbots] = useState<ChatbotType[] | null>(null);
	const [untouchedChatbots, setUntouchedChatbots] = useState<
		ChatbotType[] | null
	>(null);
	const [error, setError] = useState<unknown | null>(null);

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

	const value = {
		view,
		setView,
		chatbots,
		setChatbots,
		untouchedChatbots,
	};

	return (
		<div className="my-8">
			<ListPageHeader />
			<h2 className="mt-8 text-3xl font-bold leading-10 text-[#607B99]">
				Favorites
			</h2>
			<div>
				<div className="mt-4 flex flex-wrap gap-6">
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
					))}
				</div>
				<hr className="my-10" />
				<div className="flex flex-wrap gap-6">
					{chatbots.map((chatbot) => (
						<Chatbot key={chatbot.name} variant="card" chatbot={chatbot} />
					))}
				</div>
			</div>
			<ActionButton className="fixed bottom-4 right-8">
				<Add />
			</ActionButton>
		</div>
	);
};

export default ProfilePageLoading;
