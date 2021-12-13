import { SET_CURRENT_USER } from "../type";
import axios from "axios";
import { setAlert } from "./alertAction";
import jwtDecode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

export const registerUser = (userDetails) => (dispatch) => {
	axios
		.post("https://shopulse-backend.herokuapp.com/api/user/signup", userDetails)
		.then((res) => {
			const { token } = res.data;
			localStorage.setItem("token", token);
			setAuthToken(token);
			const decoded = jwtDecode(token);
			dispatch(setUser(decoded));
		})
		.catch((err) => {
			const error = err.response.data.errors;

			if (error) {
				error.forEach((error) => {
					dispatch(setAlert(error, "error"));
				});
				console.log(error);
			}
		});
};
export const loginUser = (userDetails) => (dispatch) => {
	axios
		.post("https://shopulse-backend.herokuapp.com/api/user/login", userDetails)
		.then((res) => {
			const { token } = res.data;
			localStorage.setItem("token", token);
			setAuthToken(token);
			const decoded = jwtDecode(token);
			dispatch(setUser(decoded));
		})
		.catch((err) => {
			const error = err.response.data.errors;

			if (error) {
				error.forEach((error) => {
					dispatch(setAlert(error, "error"));
				});
			}
		});
};

export const setUser = (decoded) => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("token");
	setAuthToken(false);
	dispatch(setUser({}));
};
