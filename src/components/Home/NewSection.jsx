import React from "react";
import Card from "../Global/Card";

const NewSection = () => {
	return (
		<section>
			<div className="title-new">
				<h1>New</h1>
				<p>You’ve never seen it before!</p>
			</div>
			<div>
				<Card />
			</div>
		</section>
	);
};

export default NewSection;
