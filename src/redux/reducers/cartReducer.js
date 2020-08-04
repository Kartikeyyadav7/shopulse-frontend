import {
	CART_LOADING,
	GET_CART,
	PRODUCT_ADDED_TO_CART,
	DELETE_PRODUCT,
	DELETE_CART,
} from "../type";

const initialState = {
	inCart: [],
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case CART_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_CART:
			return {
				...state,
				loading: false,
				inCart: action.payload,
			};
		case PRODUCT_ADDED_TO_CART: {
			return {
				...state,
			};
		}
		case DELETE_PRODUCT: {
			return {
				...state,
				laoding: false,
				inCart: state.inCart.products.filter(
					(product) => product._id !== action.payload
				),
			};
		}
		case DELETE_CART: {
			return {
				...state,
				loading: false,
				inCart: action.payload,
			};
		}

		default:
			return state;
	}
}
