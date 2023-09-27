import React from "react";
import Navbar from "../../components/Global/Navbar";
import "./home.css";
import CarouselSection from "../../components/Home/CarouselSection";
import CategorySection from "../../components/Home/CategorySection";
import NewSection from "../../components/Home/NewSection";
import PopularSection from "../../components/Home/PopularSection";

const HomePage = () => {
	return (
		<section>
			<Navbar />

			<CarouselSection />
			<CategorySection />
			<NewSection />
			<PopularSection />
		</section>
	);
};

export default HomePage;
