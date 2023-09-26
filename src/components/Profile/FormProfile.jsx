import React from "react";
import svgDpLarge from "../../assets/profile/dp-large.svg";

const FormProfile = () => {
	return (
		<form className="row" style={{ margin: "1rem 1.7rem" }}>
			<div className="col-flexauto form-profile">
				{/* If Screen < 768 */}
				<div className="update-image">
					<img src={svgDpLarge} alt="" width="110px" />
					<div className="btn-selectImage position-relative d-flex flex-column justify-content-center align-items-center">
						<p className="mt-3">Select image</p>
						<input type="file" className="stretched-link opacity-0" />
					</div>
				</div>
				{/* ---------------- */}

				<div>
					<div className="row mb-4" style={{ height: "47px" }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2">
								Name
							</label>
						</div>
						<div className="col-flexauto" style={{ width: "3%" }}></div>
						<div className="col-flexauto" style={{ width: "67%" }}>
							<input type="text" className="px-3" id="name" value="Johanes Mikael" />
						</div>
						<div className="col-flexauto" style={{ width: "6%" }}></div>
					</div>

					<div className="row mb-4" style={{ height: "47px" }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2">
								Email
							</label>
						</div>
						<div className="col-flexauto" style={{ width: "3%" }} />
						<div className="col-flexauto" style={{ width: "67%" }}>
							<input
								type="email"
								className="px-3"
								id="name"
								defaultValue="johanes@gmail.com"
							/>
						</div>
						<div className="col-flexauto" style={{ width: "6%" }} />
					</div>
					<div className="row mb-4" style={{ height: "47px" }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2">
								Phone Number
							</label>
						</div>
						<div className="col-flexauto" style={{ width: "3%" }} />
						<div className="col-flexauto" style={{ width: "67%" }}>
							<input type="number" className="px-3" id="name" />
						</div>
						<div className="col-flexauto" style={{ width: "6%" }} />
					</div>
					<div className="row mb-4" style={{ height: "47px" }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2">
								Gender
							</label>
						</div>
						<div className="col-flexauto" style={{ width: "3%" }} />
						<div
							className="col-flexauto d-flex flex-row align-items-center p-0"
							style={{ width: "67%" }}>
							<div className="form-check form-check-inline ms-3">
								<input
									className="form-check-input"
									type="radio"
									name="gender"
									id="laki-laki"
									defaultValue="Laki-laki"
								/>
								<label
									className="form-check-label fs-09 text-gray2"
									htmlFor="laki-laki">
									Laki-laki
								</label>
							</div>
							<div className="form-check form-check-inline">
								<input
									className="form-check-input"
									type="radio"
									name="gender"
									id="perempuan"
									defaultValue="Perempuan"
								/>
								<label
									className="form-check-label fs-09 text-gray2"
									htmlFor="perempuan">
									Perempuan
								</label>
							</div>
						</div>
						<div className="col-flexauto" style={{ width: "6%" }} />
					</div>
					<div className="row mb-5" style={{ height: 47 }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2">
								Date of birth
							</label>
						</div>
						<div className="col-flexauto" style={{ width: "3%" }} />
						<div className="col-flexauto" style={{ width: "67%" }}>
							<div className="d-flex flex-row gap-3">
								<select
									className="form-select fs-09 text-gray2 py-2"
									aria-label="Default select example">
									<option selected="" value={1}>
										1
									</option>
									<option value={2}>2</option>
									<option value={4}>3</option>
									<option value={31}>31</option>
								</select>
								<select
									className="form-select fs-09 text-gray2 py-2"
									aria-label="Default select example">
									<option selected="" value="Januari">
										Januari
									</option>
									<option value="Februari">Februari</option>
									<option value="Maret">Maret</option>
									<option value="April">April</option>
								</select>
								<select
									className="form-select fs-09 text-gray2 py-2"
									aria-label="Default select example">
									<option selected="">1990</option>
									<option value={1991}>1991</option>
									<option value={1992}>1992</option>
									<option value={1993}>1993</option>
								</select>
							</div>
						</div>
						<div className="col-flexauto" style={{ width: "6%" }} />
					</div>
					<div className="row" style={{ height: 47 }}>
						<div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
							<label htmlFor="name" className="fs-09 text-gray2" />
						</div>
						<div className="col-flexauto" style={{ width: "3%" }} />
						<div className="col-flexauto" style={{ width: "67%" }}>
							<button type="button" className="btn-save">
								Save
							</button>
						</div>
						<div className="col-flexauto" style={{ width: "6%" }} />
					</div>
				</div>
			</div>

			{/* Image */}
			<div className="change-image">
				<img src={svgDpLarge} alt="" width="110px" />

				<div className="btn-selectImage position-relative d-flex flex-column justify-content-center align-items-center">
					<p className="mt-3">Select image</p>
					<input type="file" className="stretched-link opacity-0" />
				</div>
			</div>
		</form>
	);
};

export default FormProfile;
