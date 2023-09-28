import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./myProductsPage.css";
import axios from "axios";
import { baseUrl } from "../../helpers/baseUrl";
import NoResult from "../../components/NoResult";

const MyProducts = () => {
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const limit = 5;
	const [pagination, setPagination] = useState([]);

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, [page]);

	const getData = async () => {
		axios
			.get(`${baseUrl}/product?page=${page}&limit=${limit}`)
			.then((response) => {
				setData(response.data.data);
				setPagination(response.data.pagination);
			});
	};

	const previousPage = () => {
		if (page > 1) {
			setPage((prev) => prev - 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const nextPage = () => {
		if (pagination?.totalPage > page) {
			setPage((prev) => prev + 1);
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	};

	const numberPageItems = [];
	for (let i = 1; i <= pagination?.totalPage; i++) {
		const isCurrentPage = i === pagination?.currentPage;

		const pageItem = (
			<li key={i} className={`page-item ${isCurrentPage ? "active" : ""}`}>
				{isCurrentPage ? (
					<span className="page-link" style={{ fontSize: 13 }}>
						{i}
					</span>
				) : (
					<button
						className="page-link"
						onClick={() => setPage(i)}
						style={{ fontSize: 13 }}>
						{i}
					</button>
				)}
			</li>
		);
		numberPageItems.push(pageItem);
	}

	return (
		<div
			id="page-myProducts"
			style={{ backgroundColor: "#DB3022;", width: "100vw", minHeight: "100vh" }}
			className="pt-5">
			<div className="container py-5 ">
				<h1 className="d-md-none ">My Products</h1>

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
												alt={item?.name}
												style={{
													objectFit: "contain",
													height: "100%",
												}}
											/>
											<button
												className="position-absolute btn btn-danger py-0 px-1"
												style={{ fontSize: 12, top: "2%", right: "2%" }}>
												<i className="bi bi-trash text-white"></i>
											</button>
										</div>
										<p>{item.name}</p>
									</Link>
								))
							) : (
								<NoResult text="No Item" />
							)}
						</div>
					</section>
				</main>

				<section className="d-grid justify-content-center">
					<nav aria-label="Page navigation example">
						<ul className="pagination">
							<li className="page-item">
								<button
									onClick={previousPage}
									style={{ fontSize: 13 }}
									className="page-link">
									Prev
								</button>
							</li>

							{numberPageItems}

							<li className="page-item">
								<button
									onClick={nextPage}
									style={{ fontSize: 13 }}
									className="page-link">
									Next
								</button>
							</li>
						</ul>
					</nav>
				</section>
			</div>
		</div>
	);
};

export default MyProducts;
