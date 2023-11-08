import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Global/Navbar/index";
import SidebarSeller from "../../../components/Profile/SidebarSeller";
import StoreProfile from "./store_profile";
import MyProduct from "./my_product";
import SellingProduct from "./selling_product";
import MyOrder from "./my_order";
// import OrderProfile from "./order_cancel";
import "./index.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editCustomerAction } from "../../../redux/reducers/customer/editCustomerSlice";
import FilterModal from "../../../components/Global/FilterModal";
import { getOneSellerAction } from "../../../redux/reducers/seller/getOneSellerSlice";

const SellerProfile = () => {
	const navigate = useNavigate();
	const id = localStorage.getItem("user_id");
	const dispatch = useDispatch();
	const currentUser = useSelector((state) => state.getOneSeller.data);
	const { isLoading, isEdited } = useSelector((state) => state.editCustomer);

	const [openTab, setOpenTab] = useState("store_profile");
	const [image, setImage] = useState("");
	const [showImage, setShowImage] = useState("");
	const [data, setData] = useState({
		name: "",
		email: "",
		gender: "",
		phone: "",
	});

	useEffect(() => {
		if (id) {
			dispatch(getOneSellerAction(id));
		}

		if (isEdited) {
			navigate("/");
		}
	}, [id, dispatch, isEdited, navigate]);

	useEffect(() => {
		if (currentUser) {
			setImage(currentUser.photo);
			setShowImage(currentUser.photo);

			setData({
				store_name: currentUser.store_name,
				email: currentUser.email,
				phone: currentUser.phone,
				store_description: currentUser.store_description,
			});
		}
	}, [dispatch, currentUser]);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImage(reader?.result);
		};
		reader?.readAsDataURL(file);

		setImage(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(editCustomerAction({ data, image, id }));
	};

	return (
		<div id="page-profile" className="container-float">
			<Navbar />
			<div className="profile">
				{/* Sidebar Costumer */}
				<SidebarSeller
					currentUser={currentUser}
					setOpenTab={setOpenTab}
					openTab={openTab}
				/>

				{/* <TestOrder /> */}

				{(openTab === "store_profile" || openTab === "store") && (
					<StoreProfile
						data={data}
						isLoading={isLoading}
						showImage={showImage}
						handleChangeImage={handleChangeImage}
						handleChange={handleChange}
						handleSubmit={handleSubmit}
						image={image}
					/>
				)}

				{(openTab === "my_products" || openTab === "product") && <MyProduct />}

				{openTab === "selling" && <SellingProduct />}

				{(openTab === "my_order" || openTab === "order") && <MyOrder />}

				{/* {openTab === "order_cancel" && (
          <OrderProfile/>
        )} */}
			</div>

			<FilterModal />
		</div>
	);
};

export default SellerProfile;
