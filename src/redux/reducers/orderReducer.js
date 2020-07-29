import { GET_ORDER, ORDER_LOADING, GET_CART_BY_ID } from "../type";

const initialState = {
	loading: false,
	order: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case ORDER_LOADING:
			return {
				...state,
				loading: true,
			};

		case GET_ORDER:
			return {
				...state,
				loading: false,
				order: action.payload,
			};
		case GET_CART_BY_ID:
			return {
				...state,
				loading: false,
				order: action.payload,
			};
		default:
			return state;
	}
}
