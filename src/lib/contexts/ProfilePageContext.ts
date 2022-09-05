import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { ChatbotProfile } from "../../@types/chatbots";

interface ProfilePageContextType {
	profile: ChatbotProfile;
	setProfile: Dispatch<SetStateAction<ChatbotProfile | null>>;
}

export const ProfilePageContext = createContext<
	ProfilePageContextType | undefined
>(undefined);

export const useProfilePage = () => {
	const context = useContext(ProfilePageContext);

	if (context === undefined) {
		throw new Error(
			"`ProfilePageContext` is undefined. did you call `useProfilePage` outside a provider?"
		);
	}

	return context;
};
