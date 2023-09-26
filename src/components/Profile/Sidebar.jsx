import React from "react";
import svgDp from "../../assets/profile/dp.svg";
import svgIconAccount from "../../assets/profile/icon-account.svg";
import svgIconLocate from "../../assets/profile/icon-locate.svg";
import svgIconMyOrder from "../../assets/profile/icon-myorder.svg";

const Sidebar = () => {
	return (
		<div style={{ width: "29%", marginTop: "11%" }} className="d-none d-md-block">
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
	);
};

export default Sidebar;
