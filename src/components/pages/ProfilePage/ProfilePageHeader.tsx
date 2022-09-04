import { useProfilePage } from "../../../lib/contexts/ProfilePageContext";
import formatDate from "../../../lib/utils/formatDate";
import MessageBubble from "../../icons/MessageBubble";

interface Props {}

const ProfilePageHeader = (props: Props) => {
	const { profile } = useProfilePage();

	if (profile === null) {
		return null;
	}

	return (
		<div className="flex w-full items-center justify-between">
			<div className="flex gap-2">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DEE8EC]">
					<MessageBubble />
				</div>

				<img
					className="flex h-14 w-14 items-center justify-center rounded-full object-cover"
					src={profile.image}
					alt="profile"
				/>
				<div>
					<h1 className="text-2xl font-bold text-[#56616E]">{profile.name}</h1>
					<div className="text-sm text-[#8CA0B3]">Id: {profile.shortName}</div>
				</div>
			</div>
			<div className="text-sm text-[#8CA0B3]">
				Created at {formatDate(new Date(profile.created))}
			</div>
		</div>
	);
};

export default ProfilePageHeader;
