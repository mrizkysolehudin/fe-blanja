import React from "react";
import svgIconAccount from "../../assets/img/profile/costumer/icon-account.svg";
import svgIconLocate from "../../assets/img/profile/costumer/icon-locate.svg";
import svgIconMyOrder from "../../assets/img/profile/costumer/icon-myorder.svg";

const Sidebar = ({ currentUser, openTab, setOpenTab }) => {
	return (
		<div style={{ width: "29%", marginTop: "11%" }} className="d-none d-md-block">
			<div className="sidebar2">
				<div className="centering" onClick={() => setOpenTab("my_account")}>
					{currentUser?.photo ? (
						<img
							src={currentUser?.photo}
							alt=""
							style={{
								width: "60px",
								height: "60px",
								objectFit: "cover",
								borderRadius: "50%",
							}}
							className="float-start me-3"
						/>
					) : (
						<img
							src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
							alt=""
							style={{
								width: "60px",
								height: "60px",
								objectFit: "cover",
								borderRadius: "50%",
							}}
							className="float-start me-3"
						/>
					)}

					<div>
						<p className="fw-bold mb-2">{currentUser?.name}</p>
						<p className="fs-09 mb-0 text-gray2">
							<i className="bi bi-pencil-fill"></i> Ubah profile
						</p>
					</div>
				</div>

				<div
					onClick={() => setOpenTab("my_account")}
					style={{ marginTop: "31%" }}
					className="d-flex flex-row align-items-center">
					<img src={svgIconAccount} alt="" style={{ width: "32px" }} />
					<p
						className={` mb-0 ms-3 fs-09  ${
							openTab === "my_account" ? "fw-semibold" : "text-gray2"
						}`}>
						My Account
					</p>
				</div>

				<div
					onClick={() => setOpenTab("shipping_address")}
					style={{ marginTop: "8%" }}
					className="d-flex flex-row align-items-center">
					<img src={svgIconLocate} alt="" style={{ width: "32px" }} />
					<p
						className={`mb-0 ms-3 fs-09 ${
							openTab === "shipping_address" ? "fw-semibold" : "text-gray2"
						}`}>
						Shipping Address
					</p>
				</div>

				<div
					onClick={() => setOpenTab("my_order")}
					style={{ marginTop: "8%" }}
					className="d-flex flex-row align-items-center">
					<img src={svgIconMyOrder} alt="" style={{ width: "32px" }} />
					<p
						className={`mb-0 ms-3 fs-09 ${
							openTab === "my_order" ? "fw-semibold" : "text-gray2"
						}  `}>
						My Order
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
