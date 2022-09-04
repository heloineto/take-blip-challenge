import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChatbotProfile } from "../../../@types/chatbots";
import { getChatbotProfile } from "../../../lib/api";
import { ProfilePageContext } from "../../../lib/contexts/ProfilePageContext";
import ProfilePageCards from "./ProfilePageCards";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfilePageLoading from "./ProfilePageLoading";

interface Props {}

const ProfilePage = (props: Props) => {
	const { shortName } = useParams();
	const [profile, setProfile] = useState<ChatbotProfile | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const loading = profile === null;

	useEffect(() => {
		if (!shortName) return;

		getChatbotProfile(shortName)
			.then((data) => setProfile(data))
			.catch((error) => setError(error));
	}, []);

	if (loading) {
		return <ProfilePageLoading />;
	}

	const value = { profile, setProfile };

	return (
		<ProfilePageContext.Provider value={value}>
			<div className="flex flex-grow flex-col pt-8 pb-12">
				<ProfilePageHeader />
				<hr className="mt-8 mb-6 bg-slate-300" />
				<ProfilePageCards />
				<hr className="mt-11 mb-3 bg-slate-300" />
				<p className="text-center text-slate-400">
					&copy;2019, BLiP Todos os direitos reservados |{" "}
					<span className="font-bold">Termos de Uso</span>
				</p>
			</div>
		</ProfilePageContext.Provider>
	);
};

export default ProfilePage;
