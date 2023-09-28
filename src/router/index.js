import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Global/PrivateRoute";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProfilePage from "../pages/Profile";
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
            <Route path="/category/:id" element={<CategoryPage />} />

            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* private routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/mybag" element={<MyBagPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/my-products" element={<MyProducts />} />
            {/*  */}
            {/*  */}
          </Route>
        </Routes>
        <FilterModal />
      </div>
    </BrowserRouter>
  );
};

export default Router;
