import Button from "../elements/Button";

interface Props {}

const ProfilePage = (props: Props) => {
	return (
		<div>
			<div className="border-2 mt-[32px] flex justify-between">
				<h1 className="font-extrabold text-3xl leading-10 text-[#56616E] mt-2">My chatbots</h1>
				<div className="flex gap-2 mb-2">
					<Button>Order by name</Button>
					<Button>Order by creation</Button>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
