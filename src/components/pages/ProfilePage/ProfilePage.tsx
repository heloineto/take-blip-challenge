import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChatbotProfile } from "../../../@types/chatbots";
import { getChatbotProfile } from "../../../lib/api";
import { ProfilePageContext } from "../../../lib/contexts/ProfilePageContext";
import ErrorState from "../../elements/ErrorState";
import ProfilePageCards from "./ProfilePageCards";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfilePageLoading from "./ProfilePageLoading";

const ProfilePage = () => {
	const { shortName } = useParams();
	const [profile, setProfile] = useState<ChatbotProfile | null>(null);
	const [error, setError] = useState<unknown | null>(null);
	const loading = profile === null;

	const fetchProfile = () => {
		if (!shortName) {
			setError("Missing `shortName`");
			return;
		}

		getChatbotProfile(shortName)
			.then((data) => {
				setError(null);
				setProfile(data);
			})
			.catch((error) => setError(error));
	};

	useEffect(() => {
		fetchProfile();
	}, []);

	if (error) {
		return <ErrorState onRetry={fetchProfile} />;
	}

	if (loading) {
		return <ProfilePageLoading />;
	}

	return (
		<ProfilePageContext.Provider value={{ profile, setProfile }}>
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
