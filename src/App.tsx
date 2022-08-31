import ListPage from "./components/pages/ListPage";

import { Routes, Route } from "react-router-dom";
import TopBar from "./components/layout/TopBar";

const App = () => {
	return (
		<div className="min-h-screen flex flex-col">
			<TopBar />
			<div className="bg-[#F5F8F9] flex-grow">
				<Routes>
					<Route path="/" element={<ListPage />}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
