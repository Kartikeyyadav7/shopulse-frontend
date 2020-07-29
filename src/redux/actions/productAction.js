import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_LOADING } from "../type";
import axios from "axios";

export const getProducts = () => (dispatch) => {
	dispatch(setLoadingProduct());
	axios
		.get("https://shopulse-backend.herokuapp.com/api/product/all")
		.then((res) => {
			dispatch({
				type: GET_PRODUCTS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch({
				type: GET_PRODUCTS,
				payload: null,
			});
		});
};

export const getProductById = (productId) => (dispatch) => {
	dispatch(setLoadingProduct());
	axios
		.get(`https://shopulse-backend.herokuapp.com/api/product/${productId}`)
		.then((res) => {
			dispatch({
				type: GET_PRODUCT,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log(err.response.data);
			dispatch({
				type: GET_PRODUCT,
				payload: null,
			});
		});
};

export const setLoadingProduct = () => {
	return {
		type: PRODUCT_LOADING,
	};
};
