import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route path={"/"} element={<Signup />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
