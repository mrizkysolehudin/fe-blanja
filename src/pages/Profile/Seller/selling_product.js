import React, { useState } from "react";
import "./selling_product.css";
import svgUpload from "../../../assets/img/profile/seller/upload-product.svg";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { httpFormData } from "../../../helpers/http";
import { baseUrl } from "../../../helpers/baseUrl";
import Swal from "sweetalert2";

function Selling() {
	// const user_id = JSON.parse(localStorage.getItem("user_id"));
	const user_id = localStorage.getItem("user_id");

	const [data, setData] = useState("");
	const [image, setImage] = useState("");
	const [showImage, setShowImage] = useState("");
	const [description, setDescription] = useState("");

	console.log(description);

	const handleChange = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const handleChangeImage = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setShowImage(reader?.result);
		};
		reader?.readAsDataURL(file);

		setImage(e.target.files[0]);
	};

	const handleSubmit = async () => {
		const formData = new FormData();
		formData.append("seller_id", user_id);
		formData.append("name", data?.name);
		formData.append("price", data?.price);
		formData.append("stock", data?.stock);
		formData.append("condition", data?.condition);
		formData.append("image", image);
		formData.append("description", description);

		httpFormData()
			.post(`${baseUrl}/product`, formData)
			.then(() => {
				Swal.fire({
					name: "Add product success",
					text: "Congratulations!",
					icon: "success",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					name: "Add product fail",
					text: "Add product fail",
					icon: "error",
				});
				setTimeout(() => {
					window.location.reload();
				}, 1000);
			});
	};

	return (
		<div id="selling">
			{/* Inventory */}
			<div className="content" style={{ marginTop: 145 }}>
				{/* Header */}
				<div className="row">
					<div className="col">
						<h5 style={{ margin: "0 2rem", fontWeight: "bold" }}>Inventory</h5>
						<hr />
					</div>
				</div>
				{/* Input */}
				<div className="row" style={{ margin: ".7rem 2rem" }}>
					<label for="name" className="form-label labeling">
						Name of goods
					</label>
					<input
						name="name"
						type="text"
						onChange={handleChange}
						className="form-control"
						id="name"
						style={{ width: 350, height: 48 }}
					/>
				</div>
			</div>

			{/* Items details */}
			<div className="content" style={{ marginTop: 30 }}>
				{/* Header */}
				<div className="row">
					<div className="col">
						<h5 style={{ margin: "0 2rem", fontWeight: "bold" }}>Items details</h5>
						<hr />
					</div>
				</div>

				{/* Input */}
				<div className="row" style={{ margin: ".7rem 2rem" }}>
					<label for="name" className="form-label labeling">
						Unit price
					</label>
					<input
						name="price"
						type="number"
						onChange={handleChange}
						className="form-control"
						id="name"
						style={{ width: 350, height: 48 }}
					/>
				</div>

				<div className="row" style={{ margin: "1.8rem 2rem" }}>
					<label for="name" className="form-label labeling">
						Stock
					</label>
					<div className="px-0 d-flex align-items-center gap-2">
						<input
							name="stock"
							type="number"
							onChange={handleChange}
							className="form-control"
							id="name"
							style={{ width: 350, height: 48 }}
						/>
						<label for="name" className="form-label m-0 labeling">
							Buah
						</label>
					</div>
				</div>

				<div className="row" style={{ margin: "0 2rem" }}>
					<label className="form-label labeling">Stock</label>
					<div className="px-0 d-flex gap-5">
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="condition"
								id="new"
								onChange={handleChange}
								value="new"
								checked={data.condition === "new"}
							/>
							<label className="form-check-label labeling" for="baru">
								Baru
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								name="condition"
								id="second"
								onChange={handleChange}
								value="second"
								checked={data.condition === "second"}
							/>
							<label className="form-check-label labeling" for="bekas">
								Bekas
							</label>
						</div>
					</div>
				</div>
			</div>

			{/* Photo of goods */}
			<div className="content" style={{ marginTop: 30 }}>
				{/* Header */}
				<div className="row">
					<div className="col">
						<h5 style={{ margin: "0 2rem", fontWeight: "bold" }}>Photo of goods</h5>
						<hr />
					</div>
				</div>
				{/* Input */}
				<div className="row frame-photo">
					<div className="d-flex flex-row align-items-center gap-3 px-4 mt-4">
						{showImage || image ? (
							<img
								src={showImage ?? image}
								alt=""
								style={{ width: "25%", objectFit: "cover" }}
							/>
						) : (
							<img src={svgUpload} alt="upload-foto" style={{ width: "25%" }} />
						)}
						<img src={svgUpload} alt="upload-foto" style={{ width: "15%" }} />
						<img src={svgUpload} alt="upload-foto" style={{ width: "15%" }} />
						<img src={svgUpload} alt="upload-foto" style={{ width: "15%" }} />
						<img src={svgUpload} alt="upload-foto" style={{ width: "15%" }} />
					</div>
					<p className="text-photo">Foto Utama</p>
					<hr style={{ margin: 0 }} />
					<div className="d-flex justify-content-center my-4">
						<div style={{ position: "relative" }}>
							<input
								style={{ position: "absolute", opacity: 0 }}
								type="file"
								onChange={handleChangeImage}
							/>

							<button type="button" className="btn-upload">
								Upload foto
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Description */}
			<div className="content" style={{ marginTop: 30 }}>
				{/* Header */}
				<div className="row">
					<div className="col">
						<h5 style={{ margin: "0 2rem", fontWeight: "bold" }}>Description</h5>
						<hr />
					</div>
				</div>
				{/* Input */}
				<div style={{ height: 300, margin: ".7rem 2rem", position: "relative" }}>
					<ReactQuill
						theme="snow"
						name="description"
						type="text"
						// onChange={(value) => setDescription(value)}
						// value={description}
						style={{ height: 200, zIndex: 0 }}
					/>

					<textarea
						onChange={(e) => setDescription(e.target.value)}
						value={description}
						style={{
							height: 200,
							width: 730,
							marginTop: -159,
							zIndex: 1,
							position: "absolute",
							outlineWidth: 0.2,
							outlineColor: "gray",
						}}></textarea>
				</div>
			</div>

			<div className="btn-position">
				<button onClick={() => handleSubmit()} type="button" className="btn-jual">
					Jual
				</button>
			</div>
		</div>
	);
}

export default Selling;
