import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChatbotProfile } from "../../../@types/chatbots";
import { getChatbotProfile } from "../../../lib/api";
import { ProfilePageContext } from "../../../lib/contexts/ProfilePageContext";
import ProfilePageCards from "./ProfilePageCards";
import ProfilePageHeader from "./ProfilePageHeader";

interface Props {}

const ProfilePage = (props: Props) => {
	const { shortName } = useParams();
	const [profile, setProfile] = useState<ChatbotProfile | null>(null);

	useEffect(() => {
		if (!shortName) return;

		getChatbotProfile(shortName).then((data) => setProfile(data));
	}, []);

	const value = { profile, setProfile };

	return (
		<ProfilePageContext.Provider value={value}>
			<div className="flex flex-grow flex-col pt-8 pb-12">
				<ProfilePageHeader />
				<hr className="mt-8 mb-6 bg-[#B9CBD3]" />
				<ProfilePageCards />
				<hr className="mt-11 mb-3 bg-[#B9CBD3]" />
				<p className="text-center text-[#738192]">
					&copy;2019, BLiP Todos os direitos reservados |{" "}
					<span className="font-bold">Termos de Uso</span>
				</p>
			</div>
		</ProfilePageContext.Provider>
	);
};

export default ProfilePage;
