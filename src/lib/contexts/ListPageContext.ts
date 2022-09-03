import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ChatbotType } from "../../@types/chatbots";
import { View } from "../../components/pages/ListPage/types";

type ListPageContextType = {
	view: View;
	setView: Dispatch<SetStateAction<View>>;
	chatbots: ChatbotType[] | null;
	setChatbots: Dispatch<SetStateAction<ChatbotType[] | null>>;
};

export const ListPageContext = createContext<ListPageContextType | undefined>(
	undefined
);

export const useListPage = () => {
	const context = useContext(ListPageContext);

	if (context === undefined) {
		throw new Error(
			"`ListPageContext` is undefined. did you call `useListPage` outside a provider?"
		);
	}

	return context;
};
