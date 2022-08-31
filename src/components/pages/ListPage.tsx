import Button from "../elements/Button";
import Card from "../elements/Card/Card";
import TextField from "../elements/TextField";

interface Props {}

const ProfilePage = (props: Props) => {
	return (
		<div>
			<div className="mt-[32px] flex justify-between">
				<h1 className="mt-2 text-3xl font-extrabold leading-10 text-[#56616E]">My chatbots</h1>
				<div className="mb-2 flex gap-2">
					<TextField className="h-full w-[312px]" name="search" label="Search" />
					<Button>Order by name</Button>
					<Button>Order by creation</Button>
				</div>
			</div>
			<div className="mt-[32px]">
				<h2 className="text-3xl font-bold leading-10 text-[#607B99]">Favorites</h2>
				<div className="flex gap-6">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
