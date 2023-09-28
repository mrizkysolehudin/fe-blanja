import React from "react";
import Navbar from "../../components/Global/Navbar";
import Image from "../../assets/img/jacketjeans.png";
import Image2 from "../../assets/img/jasnew.png";
import Svgplus from "../../assets/icons/icon-plus.svg";
import Svgmin from "../../assets/icons/icon-minus.svg";
import "./mybag.css";

const myBag = () => {
	return (
		<div id="bag-page">
			{/* Start Navbar */}
			<Navbar />
			{/* End Navbar */}

			{/* Content */}
			<div
				className="container d-flex flex-row justify-content-between"
				//   style={{ marginTop: "5rem" }}
			>
				<div className=" container" style={{ marginTop: "7%" }}>
					<h1 className="text-start mt-5">My bag</h1>

					<div className="d-flex flex-row justify-content-between MyOrderHP">
						<div className="ContentMyOrderHP" style={{ width: "65%" }}>
							<div className="card mb-3 me-4" style={{ width: "100%" }}>
								<div className="card-body">
									<div className="form-check d-flex flex-row justify-content-between">
										<div className="">
											<input
												className="form-check-input checkBox"
												type="checkbox"
												value=""
												id="flexCheckIndeterminate"
											/>
											<label
												className="form-check-label me-2"
												for="flexCheckIndeterminate">
												Select all items
											</label>
											<label className="me-2">(2 items Select)</label>
										</div>

										<div className="">
											<button
												className="text-danger text-end btn btn-light"
												style={{ textDecoration: "none", text: "end", width: "auto" }}>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>

							{/* content buy item */}
							<div className="card mb-2" style={{ width: "100%" }}>
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
													src={Image}
													alt=""
													className="contentCheckOut me-2 img-fluid"
													style={{ cursor: "pointer" }}
												/>
											</div>

											<div className="me-5">
												<h4
													className="navbar-brand ms-2  text-start text-wrap "
													style={{ marginBottom: "2px", width: "100%" }}>
													Men's Jacket jeans
												</h4>
												<p
													className="text-muted text-start ms-2 text-wrap "
													style={{ fontSize: "13px" }}>
													Zalora Cloth
												</p>
											</div>
											<div className="d-flex flex-row justify-content-between align-items-center">
												<img
													src={Svgmin}
													alt=""
													className="text-muted me-3 iconNavbar"
													style={{ cursor: "pointer" }}
												/>
												<label className="me-3"> 1 </label>
												<img
													src={Svgplus}
													alt=""
													className="text-muted iconNavbar"
													style={{ cursor: "pointer" }}
												/>
											</div>
										</div>
									</div>

									<div>
										<div className="price ms-4 end-2">$ 20.0</div>
									</div>
								</div>
							</div>
							<div className="card mb-2" style={{ width: "100%" }}>
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
													src={Image2}
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
													style={{ marginBottom: "2px", width: "100%" }}>
													Men's formal suit - Black
												</h4>
												<p
													className="text-muted text-start ms-2 text-wrap "
													style={{ fontSize: "13px" }}>
													Zalora Cloth
												</p>
											</div>
											<div className="d-flex flex-row justify-content-between align-items-center">
												<img
													src={Svgmin}
													alt=""
													className="text-muted me-3 iconNavbar"
													style={{ cursor: "pointer" }}
												/>
												<label className="me-3"> 1 </label>
												<img
													src={Svgplus}
													alt=""
													className="text-muted iconNavbar"
													style={{ cursor: "pointer" }}
												/>
											</div>
										</div>
									</div>

									<div>
										<div className="price ms-4 end-2">$ 20.0</div>
									</div>
								</div>
							</div>
						</div>

						<div className="card cardCost" style={{ width: "30%" }}>
							<div className="card-body">
								<h6>Shopping summary</h6>
								<div
									className="d-flex flex-row justify-content-between"
									style={{ marginTop: "10%" }}>
									<p className="total">Total price</p>
									<p className="text-danger">$ 40.0</p>
								</div>
								<button type="button" class="btn btn-danger BtnCheckOut">
									Buy
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default myBag;
