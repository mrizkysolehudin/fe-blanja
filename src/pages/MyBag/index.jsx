import React from "react";
import Navbar from "../../components/Global/Navbar";
import Svgplus from "../../assets/icons/icon-plus.svg";
import Svgmin from "../../assets/icons/icon-minus.svg";
import "./mybag.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCartAction,
	decrementQuantityAction,
	incrementQuantityAction,
	removeFromCartAction,
} from "../../redux/reducers/cartItems/cartItemsSlice";
import NoResult from "../../components/NoResult";
import { addToCheckoutAction } from "../../redux/reducers/checkout/checkoutSlice";

const MyBagPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.cartItems);
	const totalPrice = useSelector((state) => state.cart.totalPrice);

	const handleCheckout = (e) => {
		e.preventDefault();
		cartItems.forEach((cartItem) => dispatch(addToCheckoutAction(cartItem)));
		dispatch(clearCartAction());
		navigate("/checkout");
	};

	const handleMinusQuantity = (item) => {
		if (item.quantity_unit === 1) {
			return dispatch(removeFromCartAction(item));
		}
		dispatch(decrementQuantityAction(item));
	};

	return (
		<div>
			<Navbar />

			{/* Content */}
			<div id="bag-page">
				<div
					className="container d-flex flex-row justify-content-between"
					//   style={{ marginTop: "5rem" }}
				>
					<div className=" container" style={{ marginTop: "7%" }}>
						<h1 className="text-start mt-5">My bag</h1>

						<div className="d-flex flex-row justify-content-between MyOrderHP">
							<div className="ContentMyOrderHP" style={{ width: "65%" }}>
								{cartItems?.length > 0 ? (
									<div className="card mb-3 me-4" style={{ width: "100%" }}>
										<div className="card-body">
											<div className="form-check d-flex flex-row justify-content-between align-items-center">
												<div className="">
													{/* <input
													className="form-check-input checkBox"
													type="checkbox"
													value=""
													id="flexCheckIndeterminate"
												/> */}
													<label
														className="form-check-label me-2"
														for="flexCheckIndeterminate">
														Select all items
													</label>
													<label className="me-2">({cartItems?.length} items Select)</label>
												</div>

												<div className="">
													<button
														className="text-danger text-end btn btn-light"
														style={{
															textDecoration: "none",
															text: "end",
															width: "auto",
														}}>
														Delete
													</button>
												</div>
											</div>
										</div>
									</div>
								) : (
									<NoResult />
								)}

								{/* content buy item */}

								{cartItems?.length > 0
									? cartItems?.map((item, index) => {
											return (
												<div key={index} className="card mb-2" style={{ width: "100%" }}>
													<div className="card-body d-flex flex-row justify-content-between align-items-center ">
														<div className="d-flex flex-row ">
															<div className="d-flex flex-row justify-content-between align-items-center">
																<input
																	className="form-check-input checkBox d-flex align-items-center me-3"
																	type="checkbox"
																	value=""
																	id="flexCheckIndeterminate"
																/>
															</div>

															<div className="d-flex flex-row justify-content-start align-items-center ItemMyOrder">
																<div>
																	<img
																		src={item?.product?.image}
																		alt=""
																		className="contentCheckOut me-2 img-fluid"
																		style={{
																			cursor: "pointer",
																			width: "90px",
																			height: "69px",
																		}}
																	/>
																</div>

																<div className="me-5">
																	<h4
																		className="navbar-brand ms-2  text-start text-wrap "
																		style={{
																			marginBottom: "2px",
																			width: "100%",
																		}}>
																		{item?.product?.name}
																	</h4>
																	<p
																		className="text-muted text-start ms-2 text-wrap "
																		style={{ fontSize: "13px" }}>
																		{item?.product?.store_name}
																	</p>
																</div>
																<div className="d-flex flex-row justify-content-between align-items-center">
																	<button
																		onClick={() => handleMinusQuantity(item)}
																		className="text-muted me-3 pb-2 iconNavbar"
																		style={{
																			borderRadius: "60%",
																			background: "Gainsboro",
																			height: 35,
																			width: 35,
																			cursor: "pointer",
																		}}>
																		-
																	</button>
																	{/* <img src={Svgmin} alt="-" /> */}
																	<label className="me-3"> {item?.quantity_unit} </label>
																	<img
																		onClick={() => dispatch(incrementQuantityAction(item))}
																		src={Svgplus}
																		alt=""
																		className="text-muted iconNavbar"
																		style={{
																			cursor: "pointer",
																			border: "1.5px solid black",
																			borderRadius: 999,
																			padding: 4,
																			backgroundColor: "#dcdcdc",
																		}}
																	/>
																</div>
															</div>
														</div>

														<div>
															<div className="price ms-4 end-2">$ {item?.price_unit}</div>
														</div>
													</div>
												</div>
											);
									  })
									: ""}
							</div>

							<div className="card cardCost" style={{ width: "30%", height: 170 }}>
								<div className="card-body">
									<h6>Shopping summary</h6>
									<div
										className="d-flex flex-row justify-content-between"
										style={{ marginTop: "10%" }}>
										<p className="total">Total price</p>
										<p className="text-danger">$ {totalPrice || 0}</p>
									</div>
									<button
										onClick={(e) => handleCheckout(e)}
										type="button"
										class="btn btn-danger mt-2 BtnCheckOut">
										Buy
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyBagPage;
