import ActionButton from "../../elements/ActionButton";
import Card from "../../elements/Chatbot/Chatbot";
import ListPageHeader from "./ListPageHeader";

interface Props {}

const ProfilePage = (props: Props) => {
	return (
		<div className="">
			<ListPageHeader />
			<div className="mt-[32px]">
				<h2 className="text-3xl font-bold leading-10 text-[#607B99]">Favorites</h2>
				<div className="mt-4 flex gap-6">
					<Card favorite />
					<Card favorite />
					<Card favorite />
				</div>
				<hr className="my-10" />
				<div className="flex gap-6">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<ActionButton className="absolute bottom-4 right-8" />
		</div>
	);
};

export default ProfilePage;
