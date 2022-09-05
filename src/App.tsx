import { Route, Routes } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import ListPage from "./components/pages/ListPage";
import ProfilePage from "./components/pages/ProfilePage";

const App = () => {
	return (
		<div className="h-screen overflow-y-scroll">
			<div className="flex min-h-screen flex-col bg-slate-50">
				<TopBar />
				<div className="mx-auto flex w-[1246px] flex-grow flex-col">
					<Routes>
						<Route path="/" element={<ListPage />} />
						<Route path="/chatbot/:shortName" element={<ProfilePage />} />
					</Routes>
				</div>
			</div>
		</div>
	);
};

export default App;
