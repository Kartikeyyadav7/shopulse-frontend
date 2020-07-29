import React from "react";
import "./App.css";
import setAuthToken from "./utils/setAuthToken";
import ProtectedRoute from "./utils/protectedRoute";
// Components
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
// Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/cart";
import Order from "./pages/order";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import jwtDecode from "jwt-decode";
import { setUser, logoutUser } from "./redux/actions/authAction";

if (localStorage.token) {
	const decoded = jwtDecode(localStorage.token);
	setAuthToken(localStorage.token);
	store.dispatch(setUser(decoded));
	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = "/login";
	}
}

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Navbar />
					<Alert />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<ProtectedRoute exact path="/mycart" component={Cart} />
						<ProtectedRoute exact path="/myorders" component={Order} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
