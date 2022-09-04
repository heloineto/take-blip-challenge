import MessageBubble from "../../icons/MessageBubble";

interface Props {}

const ProfilePageLoading = (props: Props) => {
	return (
		<div className="flex flex-grow flex-col pt-8 pb-12">
			<div className="flex w-full items-center justify-between">
				<div className="flex gap-2">
					<div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DEE8EC]">
						<MessageBubble />
					</div>
					<div className="space-y-2">
						<div className="h-7 w-32 animate-pulse rounded-full bg-slate-500"></div>
						<div className="h-4 w-24 animate-pulse rounded-full bg-slate-500"></div>
					</div>
				</div>
				<div className="h-4 w-36 animate-pulse rounded-full bg-slate-500"></div>
			</div>
			<hr className="mt-8 mb-6 bg-[#B9CBD3]" />

			<hr className="mt-11 mb-3 bg-[#B9CBD3]" />
			<p className="text-center text-[#738192]">
				&copy;2019, BLiP Todos os direitos reservados |{" "}
				<span className="font-bold">Termos de Uso</span>
			</p>
		</div>
	);
};

export default ProfilePageLoading;
