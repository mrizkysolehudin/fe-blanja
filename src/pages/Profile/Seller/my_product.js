import React, { useEffect, useState } from "react";
import "./my_product.css";
import svgNoProduct from "../../../assets/img/profile/seller/no-product.svg";
import { useDispatch } from "react-redux";
import { baseUrl } from "../../../helpers/baseUrl";
import NoResult from "../../../components/NoResult";
import axios from "axios";

const MyProduct = () => {
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

	console.log(data);

	return (
		<div id="my-product">
			<div className="content">
				<div className="m-4">
					<h5 className="fw-bold">My product</h5>
					<nav>
						<div className="nav nav-underline gap" id="nav-tab">
							<button
								className="nav-link active"
								data-bs-toggle="tab"
								data-bs-target="#nav-allitems">
								All items
							</button>
							<button
								className="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-soldout">
								Sold out
							</button>
							<button
								className="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-archived">
								Archived
							</button>
						</div>
						<hr style={{ marginTop: 0 }} />
					</nav>

					{/* Tab Content */}
					<div className="tab-content" id="nav-tabContent">
						{/* All items */}
						<div
							className="tab-pane fade show active"
							id="nav-allitems"
							role="tabpanel">
							<div className="input-icons">
								<i className="bi bi-search icon"></i>
								<input className="input-field" type="text" placeholder="Search" />
							</div>

							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th" style={{ width: "60%" }}>
											<button className="btn-sort">
												Product name <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Price <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Stock <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
									</tr>
								</thead>
								<tbody>
									{!!data?.length ? (
										data?.map((item, index) => (
											<tr>
												<td style={{ padding: "10px 20px" }}>{item?.product_name}</td>
												<td style={{ padding: "10px 20px" }}>$ {item?.price}</td>
												<td style={{ padding: "10px 20px" }}>{item?.stock}</td>
											</tr>
										))
									) : (
										<tr>
											<td colspan="6">
												<div className="no-data">
													<img src={svgNoProduct} alt="no-order" />
												</div>
											</td>
										</tr>
									)}
								</tbody>
							</table>
						</div>

						{/* Sold out */}
						<div className="tab-pane fade" id="nav-soldout" role="tabpanel">
							<div className="input-icons">
								<i className="bi bi-search icon"></i>
								<input className="input-field" type="text" placeholder="Search" />
							</div>

							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th" style={{ width: "60%" }}>
											<button className="btn-sort">
												Product name <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Price <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Stock <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: '10px 20px' }}>Tanggal berapa?</td>
                    <td style={{ padding: '10px 20px' }}>Nama barang apa?</td>
                    <td style={{ padding: '10px 20px' }}>Jumlah berapa?</td>
                  </tr> */}

									{/* Jika data kosong */}
									<tr>
										<td colspan="6">
											<div className="no-data">
												<img src={svgNoProduct} alt="no-order" />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						{/* Archived */}
						<div className="tab-pane fade" id="nav-archived" role="tabpanel">
							<div className="input-icons">
								<i className="bi bi-search icon"></i>
								<input className="input-field" type="text" placeholder="Search" />
							</div>

							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th" style={{ width: "60%" }}>
											<button className="btn-sort">
												Product name <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Price <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
										<th className="th" style={{ width: "20%" }}>
											<button className="btn-sort">
												Stock <i className="bi bi-chevron-expand ms-2"></i>
											</button>
										</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: '10px 20px' }}>Tanggal berapa?</td>
                    <td style={{ padding: '10px 20px' }}>Nama barang apa?</td>
                    <td style={{ padding: '10px 20px' }}>Jumlah berapa?</td>
                  </tr> */}

									{/* Jika data kosong */}
									<tr>
										<td colspan="6">
											<div className="no-data">
												<img src={svgNoProduct} alt="no-order" />
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyProduct;
