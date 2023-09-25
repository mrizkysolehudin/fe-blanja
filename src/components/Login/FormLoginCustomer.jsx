import React from "react";

const FormLoginCustomer = () => {
	return (
		<form>
			<div
				className="tab-pane fade show active"
				id="v-pills-customer"
				role="tabpanel"
				aria-labelledby="v-pills-customer-tab">
				<div className="row mt-4 my-3 justify-content-center">
					<div className="col-lg-4 ">
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row mt-3 justify-content-center">
					<div className="col-lg-4">
						<input
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row mt-4 mb-4 justify-content-center">
					<div className="col-lg-4 d-flex justify-content-center">
						<button className="btn btn-danger rounded-pill w-100">Login</button>
					</div>
				</div>
			</div>
		</form>
	);
};

export default FormLoginCustomer;
