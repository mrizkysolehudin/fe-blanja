import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import svgLogo from "../../../assets/img/navbar/logo.svg";
import svgDp from "../../../assets/img/navbar/dp.svg";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../../redux/reducers/authSlice";

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const role = parseInt(localStorage.getItem("role"));

	const [isLogin, setIsLogin] = useState(false);
	const [isToggleOpen, setIsToggleOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState([]);

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			setIsLogin(true);
		}
	}, [isLogin]);

	const handleSearch = (e) => {
		e.preventDefault();

		setTimeout(() => {
			navigate(`/search-page?search=${searchTerm}`);
		}, 1000);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearch(e);
		}
	};

	return (
		<div id="navbar" className="nav-container">
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
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						onKeyDown={handleKeyDown}
						className="form-control input-search"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button
						onClick={handleSearch}
						className="btn btn-search"
						type="button">
						<i className="bi bi-search fs-6"></i>
					</button>
				</form>

				{/* Button trigger modal */}
				<button
					type="button"
					className="btn btn-light border-gray"
					data-bs-toggle="modal"
					data-bs-target="#filter">
					<i className="bi bi-funnel"></i>
				</button>
			</div>

			{/* Navbar sebelum login */}
			{isLogin ? (
				<div
					className="d-flex flex-row justify-content-end gap-nav"
					style={{ width: "30%" }}>
					<Link to="/mybag">
						<i className="bi bi-cart2 fs-4 text-gray"></i>
					</Link>
					<div>
						<i className="bi bi-bell fs-4 text-gray"></i>
					</div>
					<div>
						<i className="bi bi-envelope fs-4 text-gray"></i>
					</div>

					<img
						onClick={() => setIsToggleOpen(!isToggleOpen)}
						src={svgDp}
						alt=""
						style={{ width: "32px", marginRight: "15%" }}
					/>

					{isToggleOpen && (
						<div className="toggle-profile">
							<Link
								to="/profile"
								className="btn btn-secondary py-1 mb-2"
								style={{ fontSize: 9 }}>
								Profile
							</Link>
							{role === 0 && (
								<Link
									to="/my-products"
									className="btn btn-secondary py-1"
									style={{ fontSize: 9 }}>
									My Products
								</Link>
							)}
							<button
								onClick={() => dispatch(logoutAction())}
								className="btn btn-danger py-1"
								style={{ fontSize: 9 }}>
								logout
							</button>
						</div>
					)}
				</div>
			) : (
				<div
					className="d-flex flex-row justify-content-end gap-3 me-nav"
					style={{ width: "30%" }}>
					<Link to="/mybag" className="me-4 hidden">
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

export default Navbar;
