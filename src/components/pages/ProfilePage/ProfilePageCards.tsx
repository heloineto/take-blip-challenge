import Button from "../../elements/Button";
import Card from "../../elements/Card";
import MessageReceived from "../../icons/MessageReceived";
import MessageSent from "../../icons/MessageSent";
import User from "../../icons/User";

interface Props {}

const ProfilePageCards = (props: Props) => {
	return (
		<div className="grid flex-grow grid-flow-row grid-cols-12 gap-6">
			<Card className="col-span-3"></Card>
			<Card className="col-span-6 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white">
					<User className="ml-1 mb-0.5" />
				</div>
				<div className="text-[#52636C]">
					<div className="font-extrabold">1.000</div>
					<p>Usuários ativos</p>
				</div>
			</Card>

			<div className="col-span-3 row-span-2 my-10 flex flex-col items-center justify-between text-center">
				<img src="/hot-air-balloon.svg" alt="hot air balloon" />

				<div>
					<p className="text-[#8CA0B3]">Status account</p>
					<div className="text-2xl text-[#56616E]">Free</div>
				</div>
				<Button className="mx-auto">Update account</Button>
			</div>

			<Card className="col-span-6 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
					<MessageReceived className="mt-px" />
				</div>
				<div className="text-[#52636C]">
					<div className="font-extrabold">1.000</div>
					<p>Mensagens recebidas</p>
				</div>
			</Card>
			<Card className="col-span-3 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white">
					<MessageSent className="mt-px" />
				</div>
				<div className="text-[#52636C]">
					<div className="font-extrabold">1.000</div>
					<p>Usuários ativos</p>
				</div>
			</Card>
		</div>
	);
};

export default ProfilePageCards;
