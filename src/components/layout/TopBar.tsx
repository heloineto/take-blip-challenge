import BlipLogo from "./BlipLogo";

interface Props {}

const TopBar = (props: Props) => {
	return (
		<div className="h-[44px] w-full bg-[#1A2437] flex justify-center items-center">
			<BlipLogo />
		</div>
	);
};

export default TopBar;
