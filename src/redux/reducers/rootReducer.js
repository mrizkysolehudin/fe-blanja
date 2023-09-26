import authReducer from "./authSlice";
import registerCustomerReducer from "./customer/registerCustomerSlice";
import editCustomerReducer from "./customer/editCustomerSlice";
import getOneCustomerReducer from "./customer/getOneCustomerSlice";
import registerSellerReducer from "./seller/registerSellerSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
	registerCustomer: registerCustomerReducer,
	getOneCustomer: getOneCustomerReducer,
	editCustomer: editCustomerReducer,
	registerSeller: registerSellerReducer,
});

export default rootReducer;
