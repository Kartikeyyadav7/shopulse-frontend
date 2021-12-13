import {
	CART_LOADING,
	GET_CART,
	PRODUCT_ADDED_TO_CART,
	DELETE_PRODUCT,
	GET_ERROR,
	DELETE_CART,
	GET_CART_BY_ID,
} from "../type";
import axios from "axios";
import { setAlert } from "./alertAction";

export const getCartDetails = () => (dispatch) => {
	dispatch(setLoadingCart());
	axios
		.get("http://localhost:5000/api/cart/all")
		.then((res) => {
			dispatch({
				type: GET_CART,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_CART,
				payload: [],
			});
		});
};

export const getCartById = (cartId) => (dispatch) => {
	dispatch(setLoadingCart());
	axios
		.get(`http://localhost:5000/api/cart/${cartId}`)
		.then((res) => {
			dispatch({
				type: GET_CART_BY_ID,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_CART_BY_ID,
				payload: [],
			});
		});
};

export const addProductToCart =
	({ product, name, image, quantity, price }) =>
	(dispatch) => {
		axios
			.post("http://localhost:5000/api/cart/add", {
				product,
				name,
				image,
				quantity,
				price,
			})
			.then((res) => {
				dispatch({
					type: PRODUCT_ADDED_TO_CART,
				});
			})
			.catch((err) => {
				// console.log(err.response.data);
				console.log(err);
			});
	};

export const deleteProduct = (productId) => (dispatch) => {
	axios
		.delete(`http://localhost:5000/api/cart/delete/product/${productId}`)
		.then((res) => {
			console.log(res.data);
			// const { msg } = res.data;
			dispatch({
				type: DELETE_PRODUCT,
				payload: productId,
			});
			dispatch(getCartDetails());
			// dispatch(setAlert(msg, "info"));
		})
		.catch((err) => {
			console.log(err.response.data);
			const { errors } = err.response.data;
			dispatch({
				type: GET_ERROR,
				payload: err.response.data,
			});
			dispatch(setAlert(errors, "error"));
		});
};

export const deleteCart = () => (dispatch) => {
	axios
		.delete("https://shopulse-backend.herokuapp.com/api/cart/delete/cart")
		.then((res) => {
			dispatch({
				type: DELETE_CART,
				payload: [],
			});
			dispatch(getCartDetails());
		})
		.catch((err) => {
			console.log(err.response.data);
			dispatch({
				type: GET_ERROR,
				payload: err.response.data,
			});
		});
};

export const setLoadingCart = () => {
	return {
		type: CART_LOADING,
	};
};
