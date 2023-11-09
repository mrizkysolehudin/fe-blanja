import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "../../components/Global/Card";
import Iconstar from "../../assets/icons/icon-star.svg";
import "./product.css";
import httpJson from "../../helpers/http";
import { baseUrl } from "../../helpers/baseUrl";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/reducers/cartItems/cartItemsSlice";
import { addToCheckoutAction } from "../../redux/reducers/checkout/checkoutSlice";
import Navbar from "../../components/Global/Navbar";

const Product = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [data, setData] = useState([]);
	const [quantity, setQuantity] = useState(1);

	useEffect(() => {
		getProductById(id);
	}, [id]);

	const getProductById = async (id) => {
		try {
			const response = await httpJson().get(`${baseUrl}/product/${id}`);

			const result = response.data.data[0];
			setData(result);
		} catch (error) {
			console.log(error);
		}
	};

	const handlePlusQuantity = () => {
		if (quantity < data?.stock) {
			setQuantity((prev) => prev + 1);
		}
	};

	const handleMinusQuantity = () => {
		if (quantity > 1) {
			setQuantity((prev) => prev - 1);
		}
	};

	const handleAddToCart = (newItem) => {
		const item = {
			product_id: newItem?.id,
			quantity_unit: quantity,
			price_unit: newItem?.price,
			product: newItem,
		};

		dispatch(addToCartAction(item));

		navigate("/mybag");
	};

	const handleCheckout = (newItem) => {
		const item = {
			product_id: newItem?.id,
			quantity_unit: quantity,
			price_unit: newItem?.price,
			product: newItem,
		};

		dispatch(addToCheckoutAction(item));
		navigate("/checkout");
	};

	return (
		<main id="product-page">
			<Navbar />
			<div className="container mt-5">
				<nav>
					<ol className="breadcrumb">
						<li className="breadcrumb-item">
							<Link to="/">Home</Link>
						</li>
						<li className="breadcrumb-item">
							<Link to="#">Category</Link>
						</li>
						<li className="breadcrumb-item active" aria-current="page">
							T-Shirt
						</li>
					</ol>
				</nav>
				<div className="product mt-5">
					<div className="row">
						<section className="col-lg-4">
							<div className="model container ">
								<img src={data?.image} className="rounded img-fluid" alt="" />
							</div>
							<div className="col-auto mt-4">
								<img
									src={data?.image}
									className="rounded mx-2 img-fluid"
									style={{ width: "65px" }}
									alt=""
								/>
								<img
									src={data?.image}
									className="rounded mx-2"
									style={{ width: "65px" }}
									alt=""
								/>
								<img
									src={data?.image}
									className="rounded mx-2"
									style={{ width: "65px" }}
									alt=""
								/>
								<img
									src={data?.image}
									className="rounded mx-2"
									style={{ width: "65px" }}
									alt=""
								/>
							</div>
						</section>
						<section className="col-lg-6">
							<div className="title">
								<h1>{data?.name}</h1>
								<p>{data?.store_name}</p>
							</div>
							<div className="d-flex align-items-center">
								<img src={Iconstar} alt="Star" />
								<img src={Iconstar} alt="Star" />
								<img src={Iconstar} alt="Star" />
								<img src={Iconstar} alt="Star" />
								<img src={Iconstar} alt="Star" />
								<span className="text-secondary">(10)</span>
							</div>

							<div className="price mt-4">
								<p className="my-0">Price</p>
								<h1>$ {data?.price}</h1>
							</div>

							<div className="color mt-4">
								<p className="my-0">Color</p>
								<select class="form-select" aria-label="Default select example">
									<option selected>Select Color</option>
									<option value="1">White</option>
									<option value="2">Black</option>
									<option value="3">Red</option>
								</select>
							</div>

							<div className="size mt-4 d-flex" id="amount">
								<div className="d-flex flex-column" style={{ marginRight: "80px" }}>
									<p>Size</p>
									<div>
										<button type="button" className="btn btn-dark">
											-
										</button>
										<span className="num px-2">0</span>
										<button type="button" className="btn btn-outline-dark">
											+
										</button>
									</div>
								</div>
								<div className="d-flex flex-column">
									<p>Jumlah</p>
									<div>
										<button
											onClick={() => handleMinusQuantity()}
											type="button"
											className="btn btn-dark">
											-
										</button>
										<span className="num px-2">{quantity}</span>
										<button
											onClick={() => handlePlusQuantity()}
											type="button"
											className="btn btn-outline-dark">
											+
										</button>
									</div>
								</div>
							</div>
							<div className="button d-flex mt-4">
								<button type="button" class="btn btn-outline-dark me-2 flex-grow-3">
									Chat
								</button>
								<button
									onClick={() => handleAddToCart(data)}
									type="button"
									class="btn btn-outline-dark me-2 flex-grow-3">
									Add Bag
								</button>
								<button
									onClick={() => handleCheckout(data)}
									type="button"
									class="btn btn-danger me-2 flex-grow-1">
									Buy Now
								</button>
							</div>
						</section>
					</div>
				</div>
				<div className="row mt-5 ">
					<section className="product col-lg-12">
						<h1>Informasi Produk</h1>
						<div className="condition mt-5">
							<h2>Condition</h2>
							<h1 className="capitalize">{data?.condition}</h1>
						</div>
						<div className="description mt-5">
							<h2>Description</h2>
							<p>{data?.description}</p>
						</div>
						<div className="mt-5">
							<h1>Product Review</h1>
							<div className="row mt-5">
								<div className="col-lg-2">
									<h1>
										5.0<span>/10</span>
									</h1>
									<img src={Iconstar} alt="Star" />
									<img src={Iconstar} alt="Star" />
									<img src={Iconstar} alt="Star" />
									<img src={Iconstar} alt="Star" />
									<img src={Iconstar} alt="Star" />
								</div>
							</div>
						</div>
					</section>
				</div>
				<div className="row mt-5">
					<div className="title-card">
						<h1>You Can Also Like This</h1>
						<p>You've never seen it before!</p>
					</div>
				</div>
				<div
					className="content row mt-5"
					style={{ marginRight: "20%", width: 250 }}>
					<Card item={data} />
				</div>
			</div>
		</main>
	);
};

export default Product;
