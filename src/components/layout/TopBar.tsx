import { Link } from "react-router-dom";
import BlipLogo from "./BlipLogo";

const TopBar = () => {
	return (
		<div className="flex h-11 w-full items-center justify-center bg-slate-800">
			<Link to="/">
				<BlipLogo />
			</Link>
		</div>
	);
};

export default TopBar;
