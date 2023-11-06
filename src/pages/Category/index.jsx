import React from "react";
import Navbar from "../../components/Global/Navbar";
import { Link } from "react-router-dom";
import "./category.css";
import Card from "card";

const CategoryPage = () => {
  return (
    <main id="category">
      <Navbar />
      <div>
        <nav className="navigate">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">Category</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              T-Shirt
            </li>
          </ol>
        </nav>
      </div>
      <div>
        <h1>T-shirt</h1>
        <Card />
      </div>
    </main>
  );
};

export default CategoryPage;
