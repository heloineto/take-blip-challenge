import { ChangeEvent, useState } from "react";
import { ChatbotType } from "../../../@types/chatbots";
import { useListPage } from "../../../lib/contexts/ListPageContext";
import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import ListPageOrganization from "./ListPageOrganization";

const sortByName = (chatbots: ChatbotType[]) => {
	return chatbots.sort((a, b) => a.name.localeCompare(b.name));
};

const sortByCreation = (chatbots: ChatbotType[]) => {
	return chatbots.sort(
		(a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
	);
};

const ListPageHeader = () => {
	const [search, setSearch] = useState("");
	const { setChatbots } = useListPage();

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
		setSearch(e.target.value);

		console.log(search);
	};

	return (
		<div className="mt-[32px] flex justify-between">
			<h1 className="mt-2 text-3xl font-extrabold leading-10 text-[#56616E]">
				My chatbots
			</h1>

			<div className="mb-2 flex gap-2">
				<TextField
					className="h-full w-[312px]"
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
