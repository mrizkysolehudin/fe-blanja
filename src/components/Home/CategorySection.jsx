import React from "react";
import Image5 from "../../assets/img/T-shirt.png";
import Image6 from "../../assets/img/short.png";
import Image7 from "../../assets/img/jacket.png";
import Image8 from "../../assets/img/pants.png";
import Image9 from "../../assets/img/shoes.png";

const CategorySection = () => {
	return (
		<section>
			<div className="title-category">
				<h1>Category</h1>
				<p>What are you currently looking for</p>
			</div>
			<div className="category d-flex justify-content-center">
				<div className="category1 d-flex rounded-3` " style={{ marginLeft: "6%" }}>
					<img src={Image5} alt="T-shirt" />
					<p>T-shirt</p>
				</div>
				<div className="category2 d-flex rounded-3` " style={{ marginLeft: "6%" }}>
					<img src={Image6} alt="Short" />
					<p>Short</p>
				</div>
				<div className="category3 d-flex rounded-3` " style={{ marginLeft: "6%" }}>
					<img src={Image7} alt="Jacket" />
					<p>Jacket</p>
				</div>
				<div className="category4 d-flex rounded-3`" style={{ marginLeft: "6%" }}>
					<img src={Image8} alt="Pants" />
					<p>Pants</p>
				</div>
				<div className="category5 d-flex rounded-3` " style={{ marginLeft: "6%" }}>
					<img src={Image9} alt="Shoes" />
					<p>Shoes</p>
				</div>
			</div>
		</section>
	);
};

export default CategorySection;
