import React, { useEffect, useState } from "react";
import Logo from "../../assets/icons/shoppingBag.svg";
import { Link, useNavigate } from "react-router-dom";
import TabsCustomerSeller from "../../components/Global/TabsCustomerSeller";
import FormRegisterCustomer from "../../components/Register/FormRegisterCustomer";
import FormRegisterSeller from "../../components/Register/FormRegisterSeller";
import { useDispatch, useSelector } from "react-redux";
import { registerCustomerAction } from "../../redux/reducers/customer/registerCustomerSlice";
import { registerSellerAction } from "../../redux/reducers/seller/registerSellerSlice";

const RegisterPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [isActive, setIsActive] = useState("customer");
	const { isLoading, isCreated } = useSelector(
		(state) => state.registerCustomer,
	);

	const [data, setData] = useState({
		name: "",
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

		isActive === "customer" && dispatch(registerCustomerAction({ data }));
		isActive === "seller" && dispatch(registerSellerAction({ data }));
	};

	useEffect(() => {
		if (isCreated) {
			navigate("/login");
		}
	}, [isLoading, isCreated, navigate]);

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
						<TabsCustomerSeller isActive={isActive} setIsActive={setIsActive} />

						{isActive === "customer" && (
							<FormRegisterCustomer
								handleChange={handleChange}
								handleSubmit={handleSubmit}
							/>
						)}
						{isActive === "seller" && (
							<FormRegisterSeller
								handleChange={handleChange}
								handleSubmit={handleSubmit}
							/>
						)}

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
