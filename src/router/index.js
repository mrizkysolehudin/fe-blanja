import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/Global/PrivateRoute";
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";
import ProfilePage from "../pages/Profile";
import NotFoundPage from "../pages/NotFound";
import MyBagPage from "../pages/MyBag";
import "../app.css";
import SearchPage from "../pages/SearchPage";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/mybag" element={<MyBagPage />} />
          <Route path="/search-page" element={<SearchPage />} />
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
