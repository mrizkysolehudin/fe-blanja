import React, { useState } from "react";
import Logo from "../../assets/icons/shoppingBag.svg";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const [isActive, setIsActive] = useState("customer");

	return (
		<React.Fragment>
			<section>
				<div className="d-flex vh-100 align-items-center">
					<div className="container d-inline">
						{/* Logo Start */}
						<div className="row">
							<div className="col d-flex justify-content-center align-items-center">
								<img src={Logo} alt="shopbag" />
								<h1 className="mt-3 ms-2 fnt-color metropolis-b fs-3">Blanja</h1>
							</div>
						</div>
						{/* Logo End */}
						{/* Text Start */}
						<div className="row mt-3">
							<div className="col d-flex justify-content-center align-items-center">
								<p className="metropolis-b">Please sign up with your account</p>
							</div>
						</div>
						{/* Text End */}
						{/* Button Start */}
						<div className="row justify-content-center">
							<div
								className="col-2 nav nav-pills d-flex justify-content-center align-items-center"
								id="v-pills-tab"
								role="tablist">
								<div className="btn-group w-100 d-flex justify-content-center align-items-center">
									<button
										onClick={() => setIsActive("customer")}
										id="v-pills-customer-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-customer"
										type="button"
										role="tab"
										aria-controls="v-pills-customer"
										aria-selected="true"
										className={`btn ${
											isActive == "customer"
												? "btn-danger"
												: "btn-light border-secondary-subtle text-secondary"
										}`}>
										Customer
									</button>
									<button
										onClick={() => setIsActive("seller")}
										id="v-pills-seller-tab"
										data-bs-toggle="pill"
										data-bs-target="#v-pills-seller"
										type="button"
										role="tab"
										aria-controls="v-pills-seller"
										aria-selected="false"
										className={`btn px-4 ${
											isActive == "seller"
												? "btn-danger"
												: "btn-light border-secondary-subtle text-secondary"
										}`}>
										Seller
									</button>
								</div>
							</div>
						</div>
						{/* Button End */}
						{/* Input Start */}
						<div className="tab-content" id="v-pills-tabContent">
							<div
								className="tab-pane fade show active"
								id="v-pills-customer"
								role="tabpanel"
								aria-labelledby="v-pills-customer-tab">
								<div className="row mt-4 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="fullname"
											name="fullname"
											id="name"
											placeholder="Name"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="text"
											name="email"
											id="email"
											placeholder="Email"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 mb-5 justify-content-center">
									<div className="col-lg-4">
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Password"
											className="form-control"
										/>
									</div>
								</div>
							</div>
							<div
								className="tab-pane fade"
								id="v-pills-seller"
								role="tabpanel"
								aria-labelledby="v-pills-seller-tab">
								<div className="row mt-4 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Name"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="text"
											name="email"
											id="email"
											placeholder="Email"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="text"
											name="phone"
											id="phoen"
											placeholder="Phone Number"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 my-3 justify-content-center">
									<div className="col-lg-4">
										<input
											type="text"
											name="store"
											id="store"
											placeholder="Store name"
											className="form-control"
										/>
									</div>
								</div>
								<div className="row mt-3 mb-5 justify-content-center">
									<div className="col-lg-4">
										<input
											type="password"
											name="password"
											id="password"
											placeholder="Password"
											className="form-control"
										/>
									</div>
								</div>
							</div>
						</div>
						{/* Input End */}
						{/* Button Start */}
						<div className="row mb-4 justify-content-center">
							<div className="col-lg-4 d-flex justify-content-center">
								<button className="btn btn-danger rounded-pill w-100">
									Create Account
								</button>
							</div>
						</div>
						{/* Button End */}
						{/* Login Start */}
						<div className="row">
							<div className="col d-flex justify-content-center">
								<p>Already have an account?</p>
								<Link to="/login" className="nav-link text-danger ps-2">
									<span>Login</span>
								</Link>
							</div>
						</div>
						{/* Login End */}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
};

export default RegisterPage;
