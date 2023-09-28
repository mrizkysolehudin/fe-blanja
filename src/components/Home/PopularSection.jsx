import React from "react";
import Card from "../Global/Card";

const PopularSection = () => {
	return (
		<section id="page-home">
			<div className="title-popular">
				<h1>Popular</h1>
				<p>Find clothes that are trending recently</p>
			</div>
			<div className="d-flex flex-wrap row-gap-4 gap-3">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	);
};

export default PopularSection;
