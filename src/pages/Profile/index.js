import React from "react";
import Navbar from "../../components/Global/Navbar/index";
import FilterModal from "../../components/Global/Navbar/filter_modal";
import svgDp from "../../assets/profile/dp.svg";
import svgIconAccount from "../../assets/profile/icon-account.svg";
import svgIconLocate from "../../assets/profile/icon-locate.svg";
import svgIconMyOrder from "../../assets/profile/icon-myorder.svg";
import svgDpLarge from "../../assets/profile/dp-large.svg";
import "./profile.css";

const ProfilePage = () => {
	return (
		<div id="page-profile" className="container-float">
			<Navbar />
			<div className="d-flex flex-row height-content">
				{/* Sidebar */}
				<div
					style={{ width: "29%", marginTop: "11%" }}
					className="d-none d-md-block">
					<div className="sidebar2">
						<div className="centering">
							<img
								src={svgDp}
								alt=""
								style={{ width: "60px", borderRadius: "50%" }}
								className="float-start me-3"
							/>
							<div>
								<p className="fw-bold mb-2">Johanes Mikael</p>
								<p className="fs-09 mb-0 text-gray2">
									<i className="bi bi-pencil-fill"></i> Ubah profile
								</p>
							</div>
						</div>

						<div
							style={{ marginTop: "31%" }}
							className="d-flex flex-row align-items-center">
							<img src={svgIconAccount} alt="" style={{ width: "32px" }} />
							<p className="fw-semibold mb-0 ms-3 fs-09">My Account</p>
						</div>

						<div
							style={{ marginTop: "8%" }}
							className="d-flex flex-row align-items-center">
							<img src={svgIconLocate} alt="" style={{ width: "32px" }} />
							<p className="mb-0 ms-3 fs-09 text-gray2">Shipping Address</p>
						</div>

						<div
							style={{ marginTop: "8%" }}
							className="d-flex flex-row align-items-center">
							<img src={svgIconMyOrder} alt="" style={{ width: "32px" }} />
							<p className="mb-0 ms-3 fs-09 text-gray2">My Order</p>
						</div>
					</div>
				</div>

				{/* Content */}
				<div id="content-profile" className="bg-lightGray mt-5 mt-sm-4 mt-xl-0">
					<div className="border bg-white content ">
						<div className="row mx-3 " style={{ marginTop: "3.5%" }}>
							<div className="col ">
								<h5 className="fw-bold ">My Profile</h5>
								<p className="fs-09 text-gray2">Manage your profile Information</p>
								<hr />
							</div>
						</div>

						<div className="row" style={{ margin: "1rem 1.7rem" }}>
							<div className="col-flexauto form-profile">
								{/* If Screen < 768 */}
								<div className="update-image">
									<img src={svgDpLarge} alt="" width="110px" />
									<button type="button" className="btn-selectImage">
										Select Image
									</button>
								</div>
								{/* ---------------- */}

								<form action="">
									<div className="row mb-4" style={{ height: "47px" }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2">
												Name
											</label>
										</div>
										<div className="col-flexauto" style={{ width: "3%" }}></div>
										<div className="col-flexauto" style={{ width: "67%" }}>
											<input
												type="text"
												className="px-3"
												id="name"
												value="Johanes Mikael"
											/>
										</div>
										<div className="col-flexauto" style={{ width: "6%" }}></div>
									</div>

									<div className="row mb-4" style={{ height: "47px" }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2">
												Email
											</label>
										</div>
										<div className="col-flexauto" style={{ width: "3%" }} />
										<div className="col-flexauto" style={{ width: "67%" }}>
											<input
												type="email"
												className="px-3"
												id="name"
												defaultValue="johanes@gmail.com"
											/>
										</div>
										<div className="col-flexauto" style={{ width: "6%" }} />
									</div>
									<div className="row mb-4" style={{ height: "47px" }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2">
												Phone Number
											</label>
										</div>
										<div className="col-flexauto" style={{ width: "3%" }} />
										<div className="col-flexauto" style={{ width: "67%" }}>
											<input type="number" className="px-3" id="name" />
										</div>
										<div className="col-flexauto" style={{ width: "6%" }} />
									</div>
									<div className="row mb-4" style={{ height: "47px" }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2">
												Gender
											</label>
										</div>
										<div className="col-flexauto" style={{ width: "3%" }} />
										<div
											className="col-flexauto d-flex flex-row align-items-center p-0"
											style={{ width: "67%" }}>
											<div className="form-check form-check-inline ms-3">
												<input
													className="form-check-input"
													type="radio"
													name="gender"
													id="laki-laki"
													defaultValue="Laki-laki"
												/>
												<label
													className="form-check-label fs-09 text-gray2"
													htmlFor="laki-laki">
													Laki-laki
												</label>
											</div>
											<div className="form-check form-check-inline">
												<input
													className="form-check-input"
													type="radio"
													name="gender"
													id="perempuan"
													defaultValue="Perempuan"
												/>
												<label
													className="form-check-label fs-09 text-gray2"
													htmlFor="perempuan">
													Perempuan
												</label>
											</div>
										</div>
										<div className="col-flexauto" style={{ width: "6%" }} />
									</div>
									<div className="row mb-5" style={{ height: 47 }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2">
												Date of birth
											</label>
										</div>
										<div className="col-flexauto" style={{ width: "3%" }} />
										<div className="col-flexauto" style={{ width: "67%" }}>
											<div className="d-flex flex-row gap-3">
												<select
													className="form-select fs-09 text-gray2 py-2"
													aria-label="Default select example">
													<option selected="" value={1}>
														1
													</option>
													<option value={2}>2</option>
													<option value={4}>3</option>
													<option value={31}>31</option>
												</select>
												<select
													className="form-select fs-09 text-gray2 py-2"
													aria-label="Default select example">
													<option selected="" value="Januari">
														Januari
													</option>
													<option value="Februari">Februari</option>
													<option value="Maret">Maret</option>
													<option value="April">April</option>
												</select>
												<select
													className="form-select fs-09 text-gray2 py-2"
													aria-label="Default select example">
													<option selected="">1990</option>
													<option value={1991}>1991</option>
													<option value={1992}>1992</option>
													<option value={1993}>1993</option>
												</select>
											</div>
										</div>
										<div className="col-flexauto" style={{ width: "6%" }} />
									</div>
									<div className="row" style={{ height: 47 }}>
										<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
											<label htmlFor="name" className="fs-09 text-gray2" />
										</div>
										<div className="col-flexauto" style={{ width: "3%" }} />
										<div className="col-flexauto" style={{ width: "67%" }}>
											<button type="button" className="btn-save">
												Save
											</button>
										</div>
										<div className="col-flexauto" style={{ width: "6%" }} />
									</div>
								</form>
							</div>

							{/* Image */}
							<div className="change-image">
								<img src={svgDpLarge} alt="" width="110px" />
								<button type="button" className="btn-selectImage">
									Select Image
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<FilterModal />
		</div>
	);
};

export default ProfilePage;
