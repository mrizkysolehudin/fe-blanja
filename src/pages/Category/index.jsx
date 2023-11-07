import React, { useEffect, useState } from "react";
import Navbar from "../../components/Global/Navbar";
import { Link, useParams } from "react-router-dom";
import "./category.css";
import axios from "axios";
import { baseUrl } from "../../helpers/baseUrl";
import Card from "../../components/Global/Card";
import NoResult from "../../components/NoResult";

const CategoryPage = () => {
	const { categoryId } = useParams();
	const [data, setData] = useState([]);

	const category_name = data?.[0]?.category_name;
	console.log(category_name);

	useEffect(() => {
		if (categoryId) {
			getProductsByCategoryId(categoryId);
		}
	}, [categoryId]);

	const getProductsByCategoryId = (categoryId) => {
		axios
			.get(`${baseUrl}/product/category/${categoryId}`)
			.then((response) => {
				setData(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<main id="category">
			<Navbar />
			<div className="p-4">
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
								{category_name}
							</li>
						</ol>
					</nav>
				</div>
				<div>
					<h1>{category_name}</h1>

					<div
					// className="d-flex flex-wrap row-gap-4 gap-3 "
					>
						{data?.length > 0 ? (
							data?.map((item, index) => <Card key={index} item={item} />)
						) : (
							<NoResult />
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default CategoryPage;
