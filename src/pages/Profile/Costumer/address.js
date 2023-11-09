import React, { useEffect, useState } from "react";
import "./address.css";
import httpJson from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";
import Swal from "sweetalert2";
import axios from "axios";

const Address = () => {
	const role = localStorage.getItem("role");
	const user_id = localStorage.getItem("user_id");

	const [newAddress, setNewAddress] = useState("");
	const [address, setAddress] = useState([]);
	const [primaryAddress, setPrimaryAddress] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		if (role == 1) {
			getAddressByCustomerId(user_id);
		}
	}, []);

	const getAddressByCustomerId = (customer_id) => {
		axios
			.get(`${baseUrl}/address/address-customer/${customer_id}`)
			.then((response) => {
				setAddress(response.data.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const handleChange = (e) => {
		setNewAddress({
			...newAddress,
			[e.target.name]: e.target.value,
		});
	};

	const handleAddAddress = () => {
		const data = {
			customer_id: user_id,
			...newAddress,
			primary_address: primaryAddress,
		};

		httpJson()
			.post(`${baseUrl}/address`, data)
			.then(() => {
				setOpenModal(false);
				Swal.fire({
					name: "Add address success",
					text: "Congratulations!",
					icon: "success",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			})
			.catch((err) => {
				console.log(err);
				setOpenModal(false);
				Swal.fire({
					name: "Add address fail",
					text: "Add address fail",
					icon: "error",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			});
	};

	return (
		<div id="address">
			<div className="content">
				{/* Header Address */}
				<div className="row mx-3" style={{ marginTop: "3.5%" }}>
					<div className="col">
						<h5 className="fw-bold">Choose Another Address</h5>
						<p className="text1">Manage your shipping address</p>
						<hr className="mb-0" />
					</div>
				</div>

				{/* Content Address */}
				<div className="content-address">
					{/* Button Add new address */}
					<button
						className="btn-add-address mt-4"
						data-bs-toggle="modal"
						data-bs-target="#newAddressModal"
						onClick={() => setOpenModal(true)}>
						<p className="fw-bold mt-3">Add new address</p>
					</button>

					{address.length > 0
						? address?.map((item, index) => {
								return (
									<div key={index} className="card-in-modal mt-4">
										<h6 className="fw-bold">{item?.name}</h6>
										<p style={{ fontSize: "0.85rem" }}>
											({item?.address_type}) {item?.street}, {item?.city},{" "}
											{item?.postal_code}
										</p>
										<p style={{ fontSize: "0.85rem", marginTop: -10 }}>{item?.phone}</p>
										<button className="btn-red">Change address</button>
									</div>
								);
						  })
						: ""}
				</div>
			</div>

			{openModal && (
				<div
					class="modal"
					id="newAddressModal"
					tabindex="-1"
					aria-labelledby="newAddressModalLabel">
					<div class="modal-dialog modal-dialog-centered modal-lg">
						<div class="modal-content">
							<div class="modal-header border border-bottom-0">
								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"></button>
							</div>
							<div class="modal-body p-5 pt-1">
								<div className="d-flex flex-column align-items-center">
									<h3 className="fw-bold mb-4">Add new address</h3>
									<form className="row g-3">
										<div className="col-12">
											<label for="address-as" className="form-label fs-input">
												Save address as (ex : home address, office address)
											</label>
											<input
												name="address_type"
												type="text"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="address-as"
												placeholder="Rumah"
											/>
										</div>

										<div className="col-6 col-full">
											<label for="name" className="form-label fs-input">
												Recipient's name
											</label>
											<input
												name="name"
												type="text"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="name"
											/>
										</div>
										<div className="col-6 col-full">
											<label for="telp" className="form-label fs-input">
												Recipient's telephone number
											</label>
											<input
												name="phone"
												type="number"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="telp"
											/>
										</div>

										<div className="col-6 col-full">
											<label for="addressInput" className="form-label fs-input">
												Address
											</label>
											<input
												name="street"
												type="text"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="addressInput"
											/>
										</div>
										<div className="col-6 col-full">
											<label for="postal-code" className="form-label fs-input">
												Postal code
											</label>
											<input
												name="postal_code"
												type="number"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="postal-code"
											/>
										</div>

										<div className="col-6 col-full">
											<label for="city" className="form-label fs-input">
												City or Subdistrict
											</label>
											<input
												name="city"
												type="text"
												onChange={handleChange}
												className="form-control field-inmodal"
												id="city"
											/>
										</div>

										<div className="col-12">
											<div className="form-check">
												<input
													checked={primaryAddress === true}
													onClick={() => setPrimaryAddress(!primaryAddress)}
													className="form-check-input p-2"
													type="checkbox"
													id="check-address"
													style={{ border: "1px solid #9B9B9B" }}
												/>
												<label className="form-check-label fs-input" for="check-address">
													Make it the primary address
												</label>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn-cancel"
									// onClick={() => setOpenModal(false)}
								>
									Close
								</button>
								<button onClick={() => handleAddAddress()} class="btn-save">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Address;
