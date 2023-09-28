import React from "react";
import Card from "../Global/Card";

const NewSection = () => {
	return (
		<section id="page-home">
			<div className="title-new">
				<h1>New</h1>
				<p>You’ve never seen it before!</p>
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

export default NewSection;
