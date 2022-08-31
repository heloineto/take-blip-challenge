import Button from "../../elements/Button";
import TextField from "../../elements/TextField";
import OrganizeBlocks from "../../icons/OrganizeBlocks";
import OrganizeList from "../../icons/OrganizeList";

interface Props {}

const ListPageHeader = (props: Props) => {
	return (
		<div className="mt-[32px] flex justify-between">
			<h1 className="mt-2 text-3xl font-extrabold leading-10 text-[#56616E]">My chatbots</h1>
			<div className="mb-2 flex gap-2">
				<TextField className="h-full w-[312px]" name="search" label="Search" />
				<Button>Order by name</Button>
				<Button>Order by creation</Button>
				<button>
					<OrganizeBlocks />
				</button>
				<button>
					<OrganizeList />
				</button>
			</div>
		</div>
	);
};

// #D2DFE6
// #6E7B91

export default ListPageHeader;
