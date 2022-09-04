import { Link } from "react-router-dom";
import BlipLogo from "./BlipLogo";

const TopBar = () => {
	return (
		<div className="flex h-[44px] w-full items-center justify-center bg-[#1A2437]">
			<Link to="/">
				<BlipLogo />
			</Link>
		</div>
	);
};

export default TopBar;
