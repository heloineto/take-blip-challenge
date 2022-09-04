import chatbots from "../../../lib/mocks/chatbots";
import ActionButton from "../../elements/ActionButton";
import Button from "../../elements/Button";
import ChatbotLoading from "../../elements/Chatbot/ChatbotLoading";
import TextField from "../../elements/TextField";
import Add from "../../icons/Add";
import OrganizeGrid from "../../icons/OrganizeGrid";
import OrganizeList from "../../icons/OrganizeList";

const ListPageLoading = () => {
	return (
		<div className="my-8">
			<div className="flex justify-between">
				<h1 className="mt-2 text-3xl font-extrabold leading-10 text-gray-600">
					My chatbots
				</h1>

				<div className="mb-2 flex gap-2">
					<TextField
						className="h-full w-[312px]"
						name="search"
						label="Search"
					/>
					<Button>Order by name</Button>
					<Button>Order by creation</Button>
					<div className="flex gap-1">
						<button type="button">
							<OrganizeGrid className="text-slate-500" />
						</button>
						<button type="button">
							<OrganizeList className="text-slate-200" />
						</button>
					</div>
				</div>
			</div>
			<h2 className="mt-8 text-3xl font-bold leading-10 text-[#607B99]">
				Favorites
			</h2>
			<div>
				<div className="mt-4 flex flex-wrap gap-6">
					{chatbots.map((chatbot) => (
						<ChatbotLoading key={chatbot.name} />
					))}
				</div>
				<hr className="my-10" />
				<div className="flex flex-wrap gap-6">
					{chatbots.map((chatbot) => (
						<ChatbotLoading key={chatbot.name} />
					))}
				</div>
			</div>
			<ActionButton className="fixed bottom-4 right-8">
				<Add />
			</ActionButton>
		</div>
	);
};

export default ListPageLoading;
