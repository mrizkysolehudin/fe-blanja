import React from "react";
import Card from "../Global/Card";
import Alert from "../Global/Alert";
import NoResult from "../NoResult";

const NewSection = ({ data, isLoading, isError }) => {
	const dataLength = data?.length;
	const lastItem = dataLength > 6 ? dataLength - 6 : 0;

	return (
		<section id="page-home" className="px-5 mx-2">
			<div className="title-new">
				<h1>New</h1>
				<p>You’ve never seen it before!</p>
			</div>
			<div className="d-flex flex-wrap row-gap-4 gap-3">
				{isLoading ? (
					<Alert type="loading" />
				) : isError ? (
					<Alert type="error" />
				) : data?.length > 0 ? (
					data
						?.slice(lastItem, dataLength)
						?.map((item, index) => <Card key={index} item={item} />)
				) : (
					<NoResult />
				)}
			</div>
		</section>
	);
};

export default NewSection;
