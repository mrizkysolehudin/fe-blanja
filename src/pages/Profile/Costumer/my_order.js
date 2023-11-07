import React, { useEffect, useState } from "react";
import "./my_order.css";
import svgNoProduct from "../../../assets/img/profile/seller/no-order.svg";
import axios from "axios";
import { baseUrl } from "../../../helpers/baseUrl";
import { formatDateDDMMYY } from "../../../utils/formatDate";

const MyOrder = () => {
	const [dataOrderItems, setDataOrderItems] = useState([]);
	const role = localStorage.getItem("role");
	const user_id = localStorage.getItem("user_id");

	useEffect(() => {
		if (role == 1) {
			getDataOrderItems(user_id);
		}
	}, []);

	const getDataOrderItems = (customer_id) => {
		axios
			.get(`${baseUrl}/order-items/orderitems-customer/${customer_id}`)
			.then((response) => {
				console.log(response);
				setDataOrderItems(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div id="my-order">
			<div className="content">
				<div className="m-4">
					<h5 className="fw-bold">My order</h5>
					<nav>
						<div class="nav nav-underline gap" id="nav-tab">
							<button
								class="nav-link active"
								data-bs-toggle="tab"
								data-bs-target="#nav-allitems">
								All items
							</button>
							<button
								class="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-notyetpaid">
								Not yet paid
							</button>
							<button
								class="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-packed">
								Packed
							</button>
							<button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-sent">
								Sent
							</button>
							<button
								class="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-completed">
								Completed
							</button>
							<button
								class="nav-link"
								data-bs-toggle="tab"
								data-bs-target="#nav-ordercancel">
								Order cancel
							</button>
						</div>
						<hr style={{ marginTop: 0 }} />
					</nav>
					<div class="tab-content" id="nav-tabContent">
						{/* Tab All items */}
						<div class="tab-pane fade show active" id="nav-allitems" role="tabpanel">
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
											<th className="th">Tanggal</th>
											<th className="th">Nama barang</th>
											<th className="th">Jumlah</th>
											<th className="th">Harga</th>
											<th className="th">Order id</th>
											<th className="th">Metode Pembayaran</th>
										</tr>
									</thead>
									<tbody>
										{dataOrderItems.length > 0 ? (
											dataOrderItems.map((item, index) => {
												return (
													<tr key={index} style={{ fontSize: 12 }}>
														<td style={{ padding: 10 }}>
															{formatDateDDMMYY(item?.order_data)}
														</td>
														<td style={{ padding: 10 }}>{item?.product_name}</td>
														<td style={{ padding: 10 }}>{item?.quantity_unit}</td>
														<td style={{ padding: 10 }}>$ {item?.price_unit}</td>
														<td style={{ padding: 10 }}>{item?.order_id}</td>
														<td style={{ padding: 10 }}>{item?.payment_method}</td>
													</tr>
												);
											})
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
						</div>

						{/* Tab Not yet paid */}
						<div class="tab-pane fade" id="nav-notyetpaid" role="tabpanel">
							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th">Tanggal</th>
										<th className="th">Nama barang</th>
										<th className="th">Jumlah</th>
										<th className="th">Harga</th>
										<th className="th">Order id</th>
										<th className="th">Metode Pembayaran</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
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

						{/* Tab Packed */}
						<div class="tab-pane fade" id="nav-packed" role="tabpanel">
							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th">Tanggal</th>
										<th className="th">Nama barang</th>
										<th className="th">Jumlah</th>
										<th className="th">Harga</th>
										<th className="th">Order id</th>
										<th className="th">Metode Pembayaran</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
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

						{/* Tab Sent */}
						<div class="tab-pane fade" id="nav-sent" role="tabpanel">
							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th">Tanggal</th>
										<th className="th">Nama barang</th>
										<th className="th">Jumlah</th>
										<th className="th">Harga</th>
										<th className="th">Order id</th>
										<th className="th">Metode Pembayaran</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
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

						{/* Tab Completed */}
						<div class="tab-pane fade" id="nav-completed" role="tabpanel">
							<div className="input-icons">
								<i className="bi bi-search icon"></i>
								<input className="input-field" type="text" placeholder="Search" />
							</div>

							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th">Tanggal</th>
										<th className="th">Nama barang</th>
										<th className="th">Jumlah</th>
										<th className="th">Harga</th>
										<th className="th">Order id</th>
										<th className="th">Metode Pembayaran</th>
									</tr>
								</thead>
								<tbody>
									{dataOrderItems.length > 0 ? (
										dataOrderItems.map((item, index) => {
											return (
												<tr key={index} style={{ fontSize: 12 }}>
													<td style={{ padding: 10 }}>
														{formatDateDDMMYY(item?.order_data)}
													</td>
													<td style={{ padding: 10 }}>{item?.product_name}</td>
													<td style={{ padding: 10 }}>{item?.quantity_unit}</td>
													<td style={{ padding: 10 }}>$ {item?.price_unit}</td>
													<td style={{ padding: 10 }}>{item?.order_id}</td>
													<td style={{ padding: 10 }}>{item?.payment_method}</td>
												</tr>
											);
										})
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

						{/* Tab Order cancel */}
						<div class="tab-pane fade" id="nav-ordercancel" role="tabpanel">
							<table
								class="table"
								style={{ height: 400, border: "1px solid #D4D4D4" }}>
								<thead>
									<tr style={{ width: "100%", height: 60 }}>
										<th className="th">Tanggal</th>
										<th className="th">Nama barang</th>
										<th className="th">Jumlah</th>
										<th className="th">Harga</th>
										<th className="th">Order id</th>
										<th className="th">Metode Pembayaran</th>
									</tr>
								</thead>
								<tbody>
									{/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
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

export default MyOrder;
