import "bootstrap/dist/css/bootstrap.min.css";
import "@progress/kendo-theme-default/dist/all.css"; //For graph
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path={"/"} element={<Signup />} />
					<Route path={"/login"} element={<Login />} />
					<Route path={"/dashboard"} element={<Dashboard />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
