import React, { useState } from "react";
import gopay from "../../../assets/img/gopay.png";
import pos from "../../../assets/img/pos.png";
import mastercard from "../../../assets/img/mastercard.svg";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { clearCheckoutAction } from "../../../redux/reducers/checkout/checkoutSlice";

const Payment = ({ orderPrice, totalCost, deliveryCost }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user_id = JSON.parse(localStorage.getItem("user_id"));

	const checkoutItems = useSelector((state) => state.checkout.checkoutItems);
	const seller_id = checkoutItems?.[0]?.product?.seller_id;

	const [selectedMethod, setSelectedMethod] = useState("");

	const handleSelectedMethodChange = (e) => {
		const value = e.target.value;

		if (value === selectedMethod) {
			setSelectedMethod("");
		} else {
			setSelectedMethod(value);
		}
	};

	const handleAddOrder = () => {
		const data = {
			order_total: totalCost,
			payment_method: selectedMethod,
			address_id: 1,
			customer_id: user_id,
			seller_id: seller_id,
			items: [],
		};

		checkoutItems?.forEach((val) => {
			data?.items?.push(val?.product);
		});

		httpJson()
			.post(`${baseUrl}/orders`, data)
			.then(() => {
				Swal.fire({
					name: "Order success",
					text: "Congratulations!",
					icon: "success",
				});
				dispatch(clearCheckoutAction());
				navigate("/");
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					name: "Order fail",
					text: "Order fail",
					icon: "error",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			});
	};

	return (
		<div id="payment-modal">
			<div
				className="modal fade"
				id="payment"
				aria-hidden="true"
				aria-labelledby="exampleModalToggleLabel"
				tabindex="-1">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="modal-body p-4 ">
							<div className="d-flex flex-column ">
								<div style={{ height: 40 }} className="d-flex align-items-center gap-3">
									<button
										type="button"
										className="btn-close fw-bold"
										data-bs-dismiss="modal"
										aria-label="Close"></button>
									<h3 className="fw-bold mt-2">Payment</h3>
								</div>
								<hr />
								<h5 style={{ fontWeight: 600, marginBottom: 20 }}>Payment method</h5>
								<div className="d-flex mb-4">
									<img src={gopay} alt="gopay" style={{ width: 80, height: 18 }} />
									<p style={{ marginLeft: "26%" }}>Gopay</p>
									<input
										type="checkbox"
										value="gopay"
										checked={selectedMethod === "gopay"}
										onChange={handleSelectedMethodChange}
										style={{ marginLeft: 200, marginBottom: 10 }}
									/>
								</div>
								<div className="d-flex mb-4">
									<img src={pos} alt="pos" style={{ width: 58, height: 40 }} />
									<p style={{ marginLeft: "29%" }}>Pos Indonesia</p>
									<input
										type="checkbox"
										value="pos indonesia"
										checked={selectedMethod === "pos indonesia"}
										onChange={handleSelectedMethodChange}
										style={{
											marginLeft: 145,
											marginBottom: 10,
										}}
									/>
								</div>
								<div className="d-flex mb-4">
									<img
										src={mastercard}
										alt="mastercard"
										style={{ width: 53, height: 40 }}
									/>
									<p style={{ marginLeft: "30%" }}>MasterCard</p>
									<input
										type="checkbox"
										value="mastercard"
										checked={selectedMethod === "mastercard"}
										onChange={handleSelectedMethodChange}
										style={{ marginLeft: 160, marginBottom: 10 }}
									/>
								</div>
							</div>
							<hr />

							<h6 style={{ fontWeight: 600 }}>Shopping summary</h6>
							<div className="d-flex">
								<p style={{ color: "#9B9B9B" }}>Order</p>
								<p style={{ fontWeight: 600, marginLeft: "71%" }}>$ {orderPrice}</p>
							</div>
							<div className="d-flex">
								<p style={{ color: "#9B9B9B" }}>Delivery</p>
								<p style={{ fontWeight: 600, marginLeft: "70%" }}>$ {deliveryCost}</p>
							</div>

							<hr />

							<div className="d-flex mt-3 ">
								<div>
									<p style={{ fontWeight: 600 }}>Shopping summary</p>
									<p style={{ color: "#DB3022" }}>$ {totalCost}</p>
								</div>
								<button
									onClick={() => handleAddOrder()}
									style={{
										borderRadius: 15,
										backgroundColor: "#DB3022",
										width: 160,
										height: 36,
										marginTop: 15,
										marginLeft: "45%",
										color: "white",
									}}>
									buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
