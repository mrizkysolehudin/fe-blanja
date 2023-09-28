import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./searchPage.css";
import axios from "axios";
import { baseUrl } from "../../helpers/baseUrl";
import NoResult from "../../components/NoResult";

const SearchPage = () => {
	const [searchData, setSearchData] = useState([]);
	const [sort, setSort] = useState("ASC");
	const [page, setPage] = useState(1);
	const limit = 5;
	const [pagination, setPagination] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const searchValue = searchParams.get("search");

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, [sort, page]);

	const getData = async () => {
		axios
			.get(
				`${baseUrl}/product?search=${searchValue}&sort=${sort}&page=${page}&limit=${limit}`,
			)
			.then((response) => {
				setSearchData(response.data.data);
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

	const dataFilter = searchData?.filter((item) => {
		return item?.name?.toLowerCase().includes(searchTerm?.toLowerCase());
	});

	return (
		<div
			id="page-search"
			style={{ backgroundColor: "#DB3022;", width: "100vw", minHeight: "100vh" }}
			className="pt-5">
			<div className="container py-5 ">
				<h1 className="d-md-none ">Search result:</h1>

				<div className="d-flex align-items-center justify-content-between">
					<h1 className="d-none d-md-block">Search result:</h1>

					<div className="gap-2 d-flex">
						{sort === "ASC" ? (
							<button
								id="btn-sorting"
								className="btn btn-dark fw-bold d-flex justify-content-center align-items-center"
								onClick={() => setSort("DESC")}>
								<img
									src="../../assets/icons/icon-sorting.svg"
									style={{
										transform: "rotate(180deg)",
									}}
									alt="icon-sorting"
								/>
							</button>
						) : (
							<button
								id="btn-sorting"
								className="btn btn-dark fw-bold d-flex justify-content-center align-items-center"
								onClick={() => setSort("ASC")}>
								<img src="../../assets/icons/icon-sorting.svg" alt="icon-sorting" />
							</button>
						)}

						<input
							type="text"
							className="form-control"
							placeholder="search..."
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
						/>
					</div>
				</div>

				<main style={{ width: "90vw" }} className="py-5 my-5">
					<section id="popular-recipe">
						<div className="d-flex flex-wrap row-gap-4 gap-4 justify-content-center">
							{!!dataFilter?.length ? (
								dataFilter?.map((item, index) => (
									<Link
										key={index}
										to={`/product/${item?.id}`}
										className="col-xl-2 col-md-2 col-12"
										style={{ position: "relative" }}>
										<div className="" style={{ height: "65%" }}>
											<img
												src={item?.image}
												alt={item?.name}
												style={{
													objectFit: "contain",
													height: "100%",
												}}
											/>
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

export default SearchPage;
