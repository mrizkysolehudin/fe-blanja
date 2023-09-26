import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/reducers/authSlice";
import { Link } from "react-router-dom";

const HomePage = () => {
	const dispatch = useDispatch();

	return (
		<div className="p-5 m-5 gap-5 d-grid">
			<div>
				<button onClick={() => dispatch(logoutAction())}>logout</button>
			</div>

			<div>
				<Link to="/profile" className="btn btn-secondary">
					profile
				</Link>
			</div>
		</div>
	);
};

export default HomePage;
