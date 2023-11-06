import authReducer from "./authSlice";
import registerCustomerReducer from "./customer/registerCustomerSlice";
import editCustomerReducer from "./customer/editCustomerSlice";
import getOneCustomerReducer from "./customer/getOneCustomerSlice";
import getOneSellerReducer from "./seller/getOneSellerSlice";
import registerSellerReducer from "./seller/registerSellerSlice";
import allProductsReducer from "./product/getAllProductsSlice";
import deleteProductReducer from "./product/deleteProductSlice";
import allCategoriesReducer from "./category/getAllCategoriesSlice";
import cartReducer from "./cartItems/cartItemsSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	userAuth: authReducer,
	cart: cartReducer,
	registerCustomer: registerCustomerReducer,
	getOneCustomer: getOneCustomerReducer,
	editCustomer: editCustomerReducer,
	registerSeller: registerSellerReducer,
	getOneSeller: getOneSellerReducer,
	allProducts: allProductsReducer,
	allCategories: allCategoriesReducer,
	deleteProduct: deleteProductReducer,
});

export default rootReducer;
