import { useListPage } from "../../../lib/contexts/ListPageContext";
import classNames from "../../../lib/utils/classNames";
import OrganizeGrid from "../../icons/OrganizeGrid";
import OrganizeList from "../../icons/OrganizeList";

interface Props {}

const ListPageOrganization = (props: Props) => {
	const { view, setView } = useListPage();

	return (
		<div className="flex gap-1">
			<button type="button" onClick={() => setView("grid")}>
				<OrganizeGrid
					className={classNames(
						view === "grid" ? "text-[#6E7B91]" : "text-[#D2DFE6]",
						"transition-colors"
					)}
				/>
			</button>
			<button onClick={() => setView("list")}>
				<OrganizeList
					className={classNames(
						view === "list" ? "text-[#6E7B91]" : "text-[#D2DFE6]",
						"transition-colors"
					)}
				/>
			</button>
		</div>
	);
};

export default ListPageOrganization;
