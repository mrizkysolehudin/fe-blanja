import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Global/PrivateRoute";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import NotFoundPage from "../pages/NotFound";
import "../app.css";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* public routes */}
				<Route>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />

					<Route path="*" element={<NotFoundPage />} />
				</Route>

				{/* private routes */}
				<Route element={<PrivateRoute />}>
					{/*  */}
					{/*  */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
