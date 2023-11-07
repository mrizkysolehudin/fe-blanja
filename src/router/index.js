import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Global/PrivateRoute";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProfileCostumer from "../pages/Profile/Costumer";
import ProfileSeller from "../pages/Profile/Seller";
import NotFoundPage from "../pages/NotFound";
import MyBagPage from "../pages/MyBag";
import Checkout from "../pages/Checkout";
import "../app.css";
import SearchPage from "../pages/SearchPage";
import Product from "../pages/Product";
import CategoryPage from "../pages/Category";
import FilterModal from "../components/Global/FilterModal";
import MyProducts from "../pages/MyProducts";

const Router = () => {
	const role = localStorage.getItem("role");
	console.log(role == 0);

	return (
		<BrowserRouter>
			<div>
				<Routes>
					{/* public routes */}
					<Route>
						<Route path="/" element={<HomePage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/register" element={<RegisterPage />} />
						<Route path="/search-page" element={<SearchPage />} />
						<Route path="/product/:id" element={<Product />} />
						<Route path="/category/:categoryId" element={<CategoryPage />} />

						<Route path="*" element={<NotFoundPage />} />
					</Route>

					{/* private routes */}
					<Route element={<PrivateRoute />}>
						<Route path="/mybag" element={<MyBagPage />} />
						<Route path="/checkout" element={<Checkout />} />
						{role == 0 ? (
							<Route path="/profile" element={<ProfileSeller />} />
						) : (
							<Route path="/profile" element={<ProfileCostumer />} />
						)}
						<Route path="/my-products" element={<MyProducts />} />
					</Route>
				</Routes>
				<FilterModal />
			</div>
		</BrowserRouter>
	);
};

export default Router;
