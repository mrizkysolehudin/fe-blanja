import React from "react";

const FormRegisterCustomer = ({ handleChange, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit} className="tab-content" id="v-pills-tabContent">
			<div
				className="tab-pane fade show active"
				id="v-pills-customer"
				role="tabpanel"
				aria-labelledby="v-pills-customer-tab">
				<div className="row mt-4 my-3 justify-content-center">
					<div className="col-lg-4">
						<input
							onChange={handleChange}
							type="name"
							name="name"
							id="name"
							placeholder="Name"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row mt-3 my-3 justify-content-center">
					<div className="col-lg-4">
						<input
							onChange={handleChange}
							type="email"
							name="email"
							id="email"
							placeholder="Email"
							className="form-control"
						/>
					</div>
				</div>
				<div className="row mt-3 mb-5 justify-content-center">
					<div className="col-lg-4">
						<input
							onChange={handleChange}
							type="password"
							name="password"
							id="password"
							placeholder="Password"
							className="form-control"
						/>
					</div>
				</div>
			</div>

			<div className="row mb-4 justify-content-center">
				<div className="col-lg-4 d-flex justify-content-center">
					<button type="submit" className="btn btn-danger rounded-pill w-100">
						Create Account
					</button>
				</div>
			</div>
		</form>
	);
};

export default FormRegisterCustomer;
