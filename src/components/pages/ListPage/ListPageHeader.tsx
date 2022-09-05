import { ChangeEvent, useState } from "react";
import { ChatbotType } from "../../../@types/chatbots";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import ListPageOrganization from "./ListPageOrganization";

export const sortByName = (chatbots: ChatbotType[]) => {
	return chatbots.sort((a, b) => a.name.localeCompare(b.name));
};

export const sortByCreation = (chatbots: ChatbotType[]) => {
	return chatbots.sort(
		(a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
	);
};

const ListPageHeader = () => {
	const [search, setSearch] = useState("");
	const { setChatbots, untouchedChatbots } = useListPage();

	const onSortByName = () => {
		setChatbots((chatbots) => {
			if (chatbots === null) return null;

			return [...sortByName(chatbots)];
		});
	};

	const onSortByCreation = () => {
		setChatbots((chatbots) => {
			if (chatbots === null) return null;

			return [...sortByCreation(chatbots)];
		});
	};

	const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
		const searchTerm = e.target.value;

		setSearch(searchTerm);
		setChatbots(() => {
			if (untouchedChatbots === null) return null;

			return untouchedChatbots.filter((chatbot) =>
				chatbot.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		});
	};

	return (
		<div className="flex justify-between">
			<h1 className="mt-2 text-3xl font-extrabold leading-10 text-gray-600">
				My chatbots
			</h1>

			<div className="mb-2 flex gap-2">
				<TextField
					className="h-full w-80"
					name="search"
					label="Search"
					value={search}
					onChange={onSearch}
				/>
				<Button onClick={onSortByName}>Order by name</Button>
				<Button onClick={onSortByCreation}>Order by creation</Button>
				<ListPageOrganization />
			</div>
		</div>
	);
};

export default ListPageHeader;
