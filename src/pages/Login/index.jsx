import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/shoppingBag.svg";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import FormLoginCustomer from "../../components/Login/FormLoginCustomer";
import FormLoginSeller from "../../components/Login/FormLoginSeller";
import TabsCustomerSeller from "../../components/Global/TabsCustomerSeller";
import { useDispatch, useSelector } from "react-redux";
import {
	loginCustomerAction,
	loginSellerAction,
} from "../../redux/reducers/authSlice";

const LoginPage = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	const { isLogin } = useSelector((state) => state.userAuth);

	const [isActive, setIsActive] = useState("customer");
	const [data, setData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		isActive === "customer" && dispatch(loginCustomerAction(data));
		isActive === "seller" && dispatch(loginSellerAction(data));
	};

	useEffect(() => {
		if (token) {
			navigate("/");
		}
	}, [isLogin, navigate, token]);

	return (
		<React.Fragment>
			<div className="vh-100 d-flex align-items-center">
				<div className="container">
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
							<p className="title-p">Please login with your account</p>
						</div>
					</div>
					{/* Text End */}
					<TabsCustomerSeller isActive={isActive} setIsActive={setIsActive} />

					{isActive === "customer" && (
						<FormLoginCustomer
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					)}
					{isActive === "seller" && (
						<FormLoginSeller
							handleChange={handleChange}
							handleSubmit={handleSubmit}
						/>
					)}

					<div className="row">
						<div className="col d-flex justify-content-center">
							<p>Don't have an account? </p>
							<Link to="/register" className="nav-link text-danger ps-2">
								<span className="">Register</span>
							</Link>
						</div>
					</div>
					{/* Register End */}
				</div>
			</div>
		</React.Fragment>
	);
};

export default LoginPage;
