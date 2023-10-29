import React from "react";
import svgIconAccount from "../../assets/img/profile/costumer/icon-account.svg";
import svgIconLocate from "../../assets/img/profile/costumer/icon-locate.svg";
import svgIconMyOrder from "../../assets/img/profile/costumer/icon-myorder.svg";
import './SidebarCostumer.css';


const Sidebar = ({ currentUser, openTab, setOpenTab }) => {
	return (
		<div id="sidebar-costumer">
			<div className="sidebar2">
				<div className="centering" onClick={() => setOpenTab("my_account")}>
					{currentUser?.photo ? (
						<img
							src={currentUser?.photo}
							alt=""
							className="photo"
						/>
					) : (
						<img
							src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
							alt=""
              className="photo"
						/>
					)}

					<div>
						<p className="fw-bold mb-2">{currentUser?.name}</p>
						<p className="text1">
							<i className="bi bi-pencil-fill"></i> Ubah profile
						</p>
					</div>
				</div>

				<div className="side-menu" onClick={() => setOpenTab("my_account")} style={{ marginTop: "31%" }}>
					<img src={svgIconAccount} alt="" style={{ width: "32px" }} />
					<p className={` text2  ${openTab === "my_account" ? "fw-semibold" : "text-gray"}`}>
						My Account
					</p>
				</div>

				<div className="side-menu" onClick={() => setOpenTab("shipping_address")}>
					<img src={svgIconLocate} alt="" style={{ width: "32px" }} />
					<p className={`text2 ${openTab === "shipping_address" ? "fw-semibold" : "text-gray"}`}>
						Shipping Address
					</p>
				</div>

				<div className="side-menu" onClick={() => setOpenTab("my_order")}>
					<img src={svgIconMyOrder} alt="" style={{ width: "32px" }} />
					<p className={`text2 ${openTab === "my_order" ? "fw-semibold" : "text-gray"}`}>
						My Order
					</p>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
