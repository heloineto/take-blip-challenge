import { useListPage } from "../../../lib/contexts/ListPageContext";
import classNames from "../../../lib/utils/classNames";
import OrganizeGrid from "../../icons/OrganizeGrid";
import OrganizeList from "../../icons/OrganizeList";

const ListPageOrganization = () => {
	const { view, setView } = useListPage();

	return (
		<div className="flex gap-1">
			<button type="button" onClick={() => setView("grid")}>
				<OrganizeGrid
					className={classNames(
						view === "grid" ? "text-slate-500" : "text-slate-200",
						"transition-colors"
					)}
				/>
			</button>
			<button type="button" onClick={() => setView("list")}>
				<OrganizeList
					className={classNames(
						view === "list" ? "text-slate-500" : "text-slate-200",
						"transition-colors"
					)}
				/>
			</button>
		</div>
	);
};

export default ListPageOrganization;
