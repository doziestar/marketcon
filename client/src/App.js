import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path={"/signup"} element={<Signup />} />
					<Route path={"/login"} element={<Login />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
