import React, { useState } from "react";
import Logo from "../../assets/icons/shoppingBag.svg";
import "./login.css";
import { Link } from "react-router-dom";
import FormLoginCustomer from "../../components/Login/FormLoginCustomer";
import FormLoginSeller from "../../components/Login/FormLoginSeller";
import TabsCustomerSeller from "../../components/Global/TabsCustomerSeller";

const LoginPage = () => {
	const [isActive, setIsActive] = useState("customer");

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

					{isActive == "customer" && <FormLoginCustomer />}
					{isActive == "seller" && <FormLoginSeller />}

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
