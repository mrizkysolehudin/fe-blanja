import React, { useEffect, useState } from "react";
import "./nav.css";
import svgLogo from "../../../assets/profile/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import svgDp from "../../../assets/profile/dp.svg";
import Swal from "sweetalert2";

const Navbar1 = () => {
	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			setIsLogin(true);
		}
	}, []);

	const handleLogout = () => {
		localStorage.removeItem("token");
		Swal.fire({
			text: "Logout success",
			icon: "success",
		});

		navigate("/");

		setTimeout(() => {
			window.location.reload();
		}, 1000);
	};

	return (
		<div
			className="position-absolute bg-white d-flex flex-row align-items-center nav-shadow"
			style={{ width: "100%", height: "15%" }}>
			<div className="d-flex flex-row" style={{ width: "70%" }}>
				<div className="ms-nav">
					<Link to="/">
						<img src={svgLogo} alt="Logo" />
					</Link>
				</div>

				<form
					className="d-flex position-relative"
					role="search"
					style={{ marginLeft: "6%", width: "55%" }}>
					<input
						className="form-control me-2 py-2 ps-3 pe-5 border-gray"
						type="search"
						placeholder="Search"
						aria-label="Search"
						style={{ borderRadius: "20px" }}
					/>
					<button
						className="btn btn-search position-absolute"
						type="submit"
						style={{ right: "18px", top: "2px" }}>
						<i className="bi bi-search fs-6"></i>
					</button>
				</form>

				{/* Button trigger modal */}
				<button
					type="button"
					className="btn btn-light border-gray"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal">
					<i className="bi bi-funnel"></i>
				</button>
			</div>

			{/* Navbar sebelum login */}
			{isLogin ? (
				<div
					className="d-flex flex-row justify-content-end gap-nav"
					style={{ width: "30%" }}>
					<Link to="/cart">
						<i className="bi bi-cart2 fs-4 text-gray"></i>
					</Link>
					<div>
						<i className="bi bi-bell fs-4 text-gray"></i>
					</div>
					<div>
						<i className="bi bi-envelope fs-4 text-gray"></i>
					</div>
					<img src={svgDp} alt="" style={{ width: "32px", marginRight: "15%" }} />
				</div>
			) : (
				<div
					className="d-flex flex-row justify-content-end gap-3 me-nav"
					style={{ width: "30%" }}>
					<Link to="/cart" className="me-4 hidden">
						<i className="bi bi-cart2 fs-4 text-gray"></i>
					</Link>
					<div>
						<Link id="btn-login" to="/login" type="button" className="btn-login">
							Login
						</Link>
					</div>
					<div>
						<Link id="btn-signup" to="/register" type="button" className="btn-signup">
							Signup
						</Link>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar1;
