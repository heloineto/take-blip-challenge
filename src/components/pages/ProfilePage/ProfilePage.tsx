import { useEffect, useState } from "react";
import { ChatbotProfile } from "../../../@types/chatbots";
import { getChatbotProfile } from "../../../lib/api";
import { ProfilePageContext } from "../../../lib/contexts/ProfilePageContext";
import Button from "../../elements/Button";
import Card from "../../elements/Card";

interface Props {}

const ProfilePage = (props: Props) => {
	const [profile, setProfile] = useState<ChatbotProfile | null>(null);

	useEffect(() => {
		getChatbotProfile();
	}, []);

	const value = { profile, setProfile };

	return (
		<ProfilePageContext.Provider value={value}>
			<div className="flex flex-grow flex-col pt-8 pb-12">
				<div className="flex w-full items-center justify-between">
					<div className="flex gap-2">
						<div className="h-14 w-14 rounded-full bg-[#DEE8EC]"></div>
						<div>
							<h1 className="text-2xl font-bold text-[#56616E]">Botname</h1>
							<div className="text-sm text-[#8CA0B3]">Id: botname</div>
						</div>
					</div>
					<div className="text-sm text-[#8CA0B3]">Created at 11/09/2019</div>
				</div>
				<hr className="mt-8 mb-6 bg-[#B9CBD3]" />
				<div className="grid flex-grow grid-flow-row grid-cols-12 gap-6">
					<Card className="col-span-3"></Card>
					<Card className="col-span-6 flex items-center gap-4 p-8">
						<div className="h-14 w-14 rounded-full bg-sky-500"></div>
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
						<div className="h-14 w-14 rounded-full bg-green-500"></div>
						<div className="text-[#52636C]">
							<div className="font-extrabold">1.000</div>
							<p>Usuários ativos</p>
						</div>
					</Card>
					<Card className="col-span-3 flex items-center gap-4 p-8">
						<div className="h-14 w-14 rounded-full bg-blue-500"></div>
						<div className="text-[#52636C]">
							<div className="font-extrabold">1.000</div>
							<p>Usuários ativos</p>
						</div>
					</Card>
				</div>
				<hr className="mt-11 mb-3 bg-[#B9CBD3]" />
				<p className="text-center text-[#738192]">
					&copy;2019, BLiP Todos os direitos reservados |{" "}
					<span className="font-bold">Termos de Uso</span>
				</p>
			</div>
		</ProfilePageContext.Provider>
	);
};

export default ProfilePage;
