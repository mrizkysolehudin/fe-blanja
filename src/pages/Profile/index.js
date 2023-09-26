import React from "react";
import "./profile.css";
import Navbar1 from "../../components/Global/Navbar/nav1";
import FilterModal from "../../components/Global/Navbar/filter_modal";

import svgDp from "../../assets/profile/dp.svg";
import svgIconAccount from "../../assets/profile/icon-account.svg";
import svgIconLocate from "../../assets/profile/icon-locate.svg";
import svgIconMyOrder from "../../assets/profile/icon-myorder.svg";
import svgDpLarge from "../../assets/profile/dp-large.svg";

const ProfilePage = () => {
	return (
		<div id="page-profile" className="container-float">
			<Navbar1 />
			<div className="d-flex flex-row height-content">
				{/* Sidebar */}
				<div style={{ width: "29%", marginTop: "11%" }}>
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
				<div className="bg-lightGray" style={{ width: "71%" }}>
					<div className="border bg-white content">
						<div className="row mx-3" style={{ marginTop: "3.5%" }}>
							<div className="col">
								<h5 className="fw-bold">My Profile</h5>
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
