import { Route, Routes } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import ListPage from "./components/pages/ListPage";
import ProfilePage from "./components/pages/ProfilePage";

const App = () => {
	return (
		<div className="flex min-h-screen flex-col bg-[#F5F8F9]">
			<TopBar />
			<div className="mx-auto flex w-[1246px] flex-grow flex-col">
				<Routes>
					<Route path="/" element={<ListPage />} />
					<Route path="/chatbot/:id" element={<ProfilePage />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
