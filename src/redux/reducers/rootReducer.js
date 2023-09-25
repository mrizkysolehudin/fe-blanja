import authReducer from "./authSlice";
import registerCustomerReducer from "./customer/registerCustomerSlice";
import registerSellerReducer from "./seller/registerSellerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
	registerCustomer: registerCustomerReducer,
	registerSeller: registerSellerReducer,
});

export default rootReducer;
