import React from "react";

const TabsCustomerSeller = ({ isActive, setIsActive }) => {
	return (
		<div className="row justify-content-center ">
			<div
				className="col-2 nav nav-pills d-flex  justify-content-center align-items-center"
				id="tab"
				role="tablist">
				<div className="btn-group w-100 d-flex justify-content-center align-items-center">
					<button
						onClick={() => setIsActive("customer")}
						id="v-pills-customer-tab"
						data-bs-toggle="pill"
						data-bs-target="#v-pills-customer"
						type="button"
						role="tab"
						aria-controls="v-pills-customer"
						aria-selected="true"
						className={`btn ${
							isActive == "customer"
								? "btn-danger"
								: "btn-light border-secondary-subtle text-secondary"
						}`}>
						Customer
					</button>
					<button
						onClick={() => setIsActive("seller")}
						id="v-pills-seller-tab"
						data-bs-toggle="pill"
						data-bs-target="#v-pills-seller"
						type="button"
						role="tab"
						aria-controls="v-pills-seller"
						aria-selected="false"
						className={`btn px-4 ${
							isActive == "seller"
								? "btn-danger"
								: "btn-light border-secondary-subtle text-secondary"
						}`}>
						Seller
					</button>
				</div>
			</div>
		</div>
	);
};

export default TabsCustomerSeller;
