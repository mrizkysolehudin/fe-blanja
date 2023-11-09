import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./myProductsPage.css";
import axios from "axios";
import { baseUrl } from "../../helpers/baseUrl";
import NoResult from "../../components/NoResult";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../redux/reducers/product/deleteProductSlice";

const MyProducts = () => {
	const dispatch = useDispatch();
	const user_id = parseInt(localStorage.getItem("user_id"));

	const [data, setData] = useState([]);

	useEffect(() => {
		if (user_id) {
			getData(user_id);
		}
		// eslint-disable-next-line
	}, [user_id]);

	const getData = async (user_id) => {
		axios
			.get(`${baseUrl}/product/seller-products/${user_id}`)
			.then((response) => {
				setData(response.data.data);
			});
	};

	const handleDelete = async (id) => {
		dispatch(deleteProductAction(id));

		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	return (
		<div
			id="page-myProducts"
			style={{ backgroundColor: "#f08080 ;", width: "100vw", minHeight: "100vh" }}
			className="pt-5">
			<div className="container py-5 ">
				<h1 className="">My Products</h1>

				<main style={{ width: "90vw" }} className="py-5 my-5">
					<section id="popular-recipe">
						<div className="d-flex flex-wrap row-gap-4 gap-4 justify-content-center">
							{!!data?.length ? (
								data?.map((item, index) => (
									<Link
										key={index}
										to={`/product/${item?.id}`}
										className="col-xl-2 col-md-2 col-12"
										style={{ position: "relative" }}>
										<div
											className="bg-secondary-subtle"
											style={{ height: "65%", position: "relative", borderRadius: 10 }}>
											<img
												src={item?.image}
												alt={item?.product_name}
												style={{
													objectFit: "contain",
													height: "100%",
												}}
											/>
											<button
												type="button"
												onClick={(e) => {
													e.preventDefault();
													handleDelete(item?.id);
												}}
												className="position-absolute btn btn-danger py-0 px-1"
												style={{ fontSize: 12, top: "2%", right: "2%", zIndex: 1 }}>
												<i className="bi bi-trash text-white"></i>
											</button>
										</div>
										<p>{item?.product_name}</p>
									</Link>
								))
							) : (
								<NoResult text="No Item" />
							)}
						</div>
					</section>
				</main>
			</div>
		</div>
	);
};

export default MyProducts;
