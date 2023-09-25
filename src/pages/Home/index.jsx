import React from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/reducers/authSlice";

const HomePage = () => {
	const dispatch = useDispatch();

	return (
		<div className="p-5 m-5">
			<button onClick={() => dispatch(logoutAction())}>logout</button>
		</div>
	);
};

export default HomePage;
