import { Route, Routes } from "react-router-dom";
import TopBar from "./components/layout/TopBar";
import ListPage from "./components/pages/ListPage";

const App = () => {
	return (
		<div className="flex min-h-screen flex-col bg-[#F5F8F9]">
			<TopBar />
			<div className="mx-auto w-[1246px] flex-grow">
				<Routes>
					<Route path="/" element={<ListPage />}></Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
