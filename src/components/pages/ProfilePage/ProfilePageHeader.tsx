import { useProfilePage } from "../../../lib/contexts/ProfilePageContext";
import formatDate from "../../../lib/utils/formatDate";

interface Props {}

const ProfilePageHeader = (props: Props) => {
	const { profile } = useProfilePage();

	return (
		<div className="flex w-full items-center justify-between">
			<div className="flex gap-2">
				<img
					className="flex h-14 w-14 items-center justify-center rounded-full object-cover"
					src={profile.image}
					alt="profile"
				/>
				<div>
					<h1 className="text-2xl font-bold text-gray-600">{profile.name}</h1>
					<div className="text-sm text-gray-500">Id: {profile.shortName}</div>
				</div>
			</div>
			<div className="text-sm text-gray-500">
				Created at {formatDate(new Date(profile.created))}
			</div>
		</div>
	);
};

export default ProfilePageHeader;
