import { Link } from "react-router-dom";
import TopBarBlipLogo from "./TopBarBlipLogo";

const TopBar = () => {
	return (
		<nav className="flex h-11 w-full items-center justify-center bg-slate-800">
			<Link to="/">
				<TopBarBlipLogo />
			</Link>
		</nav>
	);
};

export default TopBar;
