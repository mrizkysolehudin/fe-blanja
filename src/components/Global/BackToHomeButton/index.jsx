import React from "react";
import { Link } from "react-router-dom";
import "../global.css";

const BackToHomeButton = ({
	top,
	right,
	className,
	bottom,
	left,
	fontSize,
	bgColor = "black",
	color = "white",
	pl = 17,
	pr = 17,
	pt,
	pb = 2,
}) => {
	return (
		<div style={{ position: "relative" }}>
			<Link
				to="/"
				style={{
					top: top,
					right: right,
					left: left,
					bottom: bottom,
					position: "absolute",
					fontSize: fontSize,
					color: color,
					backgroundColor: bgColor,
					paddingRight: pr,
					paddingLeft: pl,
					paddingTop: pt,
					paddingBottom: pb,
					borderRadius: 7,
					fontWeight: 600,
				}}
				className={className}>
				back
			</Link>
		</div>
	);
};

export default BackToHomeButton;
