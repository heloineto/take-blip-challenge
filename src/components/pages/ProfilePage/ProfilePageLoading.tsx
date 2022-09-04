import Button from "../../elements/Button";
import Card from "../../elements/Card";
import MessageBubble from "../../icons/MessageBubble";
import MessageReceived from "../../icons/MessageReceived";
import MessageSent from "../../icons/MessageSent";
import User from "../../icons/User";

interface Props {}

const ProfilePageLoading = (props: Props) => {
	return (
		<div className="flex flex-grow flex-col pt-8 pb-12">
			<div className="flex w-full items-center justify-between">
				<div className="flex gap-2">
					<div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
						<MessageBubble />
					</div>
					<div className="animate-pulse space-y-2">
						<div className="h-7 w-32 rounded-full bg-slate-200"></div>
						<div className="h-4 w-24 rounded-full bg-slate-200"></div>
					</div>
				</div>
				<div className="h-4 w-36 animate-pulse rounded-full bg-slate-200"></div>
			</div>
			<hr className="mt-8 mb-6 bg-slate-300" />
			<div className="grid flex-grow grid-flow-row grid-cols-12 gap-6">
				<Card className="col-span-3 p-8">
					<dl className="flex flex-col gap-3 text-sm text-slate-600">
						<div className="space-y-1">
							<dt>Region and idiom</dt>
							<div className="mt-1 h-4 w-32 animate-pulse rounded-full bg-slate-200"></div>
						</div>
						<div className="space-y-1">
							<dt>Timezone</dt>
							<div className="mt-1 h-4 w-32 animate-pulse rounded-full bg-slate-200"></div>
						</div>
					</dl>
				</Card>
				<Card className="col-span-6 flex items-center gap-4 p-8">
					<div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white">
						<User className="ml-1 mb-0.5" />
					</div>
					<div className="text-slate-600">
						<div className="mb-1 h-5 w-32 animate-pulse rounded-full bg-slate-200"></div>
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
						<div className="mb-1 h-5 w-32 animate-pulse rounded-full bg-slate-200"></div>
						<p>Mensagens recebidas</p>
					</div>
				</Card>
				<Card className="col-span-3 flex items-center gap-4 p-8">
					<div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-white">
						<MessageSent className="mt-px" />
					</div>
					<div className="text-slate-600">
						<div className="mb-1 h-5 w-32 animate-pulse rounded-full bg-slate-200"></div>
						<p>Mensagens enviadas</p>
					</div>
				</Card>
			</div>
			<hr className="mt-11 mb-3 bg-slate-300" />
			<p className="text-center text-slate-400">
				&copy;2019, BLiP Todos os direitos reservados |{" "}
				<span className="font-bold">Termos de Uso</span>
			</p>
		</div>
	);
};

export default ProfilePageLoading;
