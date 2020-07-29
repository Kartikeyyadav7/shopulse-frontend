import { ORDER_PAYMENT, GET_ORDER, SET_ORDER, ORDER_LOADING } from "../type";
import axios from "axios";
import { deleteCart } from "./cartAction";
import { setAlert } from "./alertAction";

export const paymentOrder = (details) => (dispatch) => {
	axios
		.post("https://shopulse-backend.herokuapp.com/api/order/payment", details)
		.then((res) => {
			const { msg } = res.data;
			dispatch({
				type: ORDER_PAYMENT,
			});
			dispatch(deleteCart());
			dispatch(setAlert(msg, "info"));
		})
		.catch((err) => {
			const { error } = err.response.data;
			dispatch(setAlert(error, "error"));
		});
};

export const setOrder = (details) => (dispatch) => {
	axios
		.post("https://shopulse-backend.herokuapp.com/api/order/add", details)
		.then((res) => {
			dispatch({
				type: SET_ORDER,
				payload: res.data,
			});
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err.response.data);
		});
};

export const getOrder = () => (dispatch) => {
	dispatch(setLoadingOrder());
	axios
		.get("https://shopulse-backend.herokuapp.com/api/order/getOrder")
		.then((res) => {
			dispatch({
				type: GET_ORDER,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err.response.data);
			dispatch({
				type: GET_ORDER,
				payload: [],
			});
		});
};

export const setLoadingOrder = () => {
	return {
		type: ORDER_LOADING,
	};
};
