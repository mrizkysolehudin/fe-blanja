import React from "react";
import Card from "../Global/Card";
import NoResult from "../NoResult";
import Alert from "../Global/Alert";

const PopularSection = ({ data, isLoading, isError }) => {
	return (
		<section id="page-home" className="px-5 mx-2">
			<div className="title-popular">
				<h1>Popular</h1>
				<p>Find clothes that are trending recently</p>
			</div>

			<div className="d-flex flex-wrap row-gap-4 gap-3 ">
				{isLoading ? (
					<Alert type="loading" />
				) : isError ? (
					<Alert type="error" />
				) : data?.length > 0 ? (
					data?.map((item, index) => <Card key={index} item={item} />)
				) : (
					<NoResult />
				)}
			</div>
		</section>
	);
};

export default PopularSection;
