import React from "react";
import Navbar from "../../components/Global/Navbar/index";
import FilterModal from "../../components/Global/Navbar/filter_modal";
import Sidebar from "../../components/Profile/Sidebar";
import "./profile.css";
import FormProfile from "../../components/Profile/FormProfile";

const ProfilePage = () => {
	return (
		<div id="page-profile" className="container-float">
			<Navbar />
			<div className="d-flex flex-row height-content">
				{/* Sidebar */}
				<Sidebar />

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

						<FormProfile />
					</div>
				</div>
			</div>

			<FilterModal />
		</div>
	);
};

export default ProfilePage;
