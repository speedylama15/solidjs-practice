import { Routes, Route } from "@solidjs/router";

import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route path="/" component={HomePage} />
				<Route path="/login" component={LoginPage} />
			</Routes>
		</div>
	);
}

export default App;
