import { GET_PRODUCTS, GET_PRODUCT, PRODUCT_LOADING } from "../type";

const initialState = {
	products: [],
	product: {},
	loading: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case PRODUCT_LOADING:
			return {
				...state,
				loading: true,
			};
		case GET_PRODUCTS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case GET_PRODUCT:
			return {
				...state,
				loading: false,
				product: action.payload,
			};
		default:
			return state;
	}
}
