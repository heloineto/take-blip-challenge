import { useProfilePage } from "../../../lib/contexts/ProfilePageContext";
import Button from "../../elements/Button";
import Card from "../../elements/Card";
import MessageReceived from "../../icons/MessageReceived";
import MessageSent from "../../icons/MessageSent";
import User from "../../icons/User";

const ProfilePageCards = () => {
	const { profile } = useProfilePage();
	const { user, message } = profile.analytics;

	return (
		<div className="grid flex-grow grid-flow-row grid-cols-12 gap-6">
			<Card className="col-span-3 p-8">
				<dl className="flex flex-col gap-3 text-sm text-slate-600">
					<div className="space-y-1">
						<dt>Region and idiom</dt>
						<dd className="font-semibold">{profile.culture}</dd>
					</div>
					<div className="space-y-1">
						<dt>Timezone</dt>
						<dd className="font-semibold">(UTC - 03:00) Brasília</dd>
					</div>
				</dl>
			</Card>
			<Card className="col-span-6 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white">
					<User className="ml-1 mb-0.5" />
				</div>
				<div className="text-slate-600">
					<div className="font-extrabold">
						{user.actived.toLocaleString("pt-BR")}
					</div>
					<p>Usuários ativos</p>
				</div>
			</Card>

			<div className="col-span-3 row-span-2 my-10 flex flex-col items-center justify-between text-center">
				<img src="/hot-air-balloon.svg" alt="hot air balloon" />

				<div>
					<p className="text-gray-500">Status account</p>
					<div className="text-2xl text-gray-600">Free</div>
				</div>
				<Button className="mx-auto">Update account</Button>
			</div>

			<Card className="col-span-6 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white">
					<MessageReceived className="mt-px" />
				</div>
				<div className="text-slate-600">
					<div className="font-extrabold">
						{message.received.toLocaleString("pt-BR")}
					</div>
					<p>Mensagens recebidas</p>
				</div>
			</Card>
			<Card className="col-span-3 flex items-center gap-4 p-8">
				<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white">
					<MessageSent className="mt-px" />
				</div>
				<div className="text-slate-600">
					<div className="font-extrabold">
						{message.sent.toLocaleString("pt-BR")}
					</div>
					<p>Mensagens enviadas</p>
				</div>
			</Card>
		</div>
	);
};

export default ProfilePageCards;
