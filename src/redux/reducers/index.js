import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import alertReducer from "./alertReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
 
const rootReducer = combineReducers({
	auth: authReducer,
	alert: alertReducer,
	product: productReducer,
	cart: cartReducer,
	order: orderReducer,
});

export default rootReducer;
