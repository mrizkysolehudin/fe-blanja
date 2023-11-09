import React, { useEffect } from "react";
import Navbar from "../../components/Global/Navbar";
import "./home.css";
import CarouselSection from "../../components/Home/CarouselSection";
import CategorySection from "../../components/Home/CategorySection";
import NewSection from "../../components/Home/NewSection";
import PopularSection from "../../components/Home/PopularSection";
import FilterModal from "../../components/Global/FilterModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../redux/reducers/product/getAllProductsSlice";
import { getAllCategoriesAction } from "../../redux/reducers/category/getAllCategoriesSlice";

const HomePage = () => {
	const dispatch = useDispatch();
	const { data, isLoading, isError } = useSelector((state) => state.allProducts);
	const {
		data: dataCategories,
		isLoadingCategory,
		isErrorCategory,
	} = useSelector((state) => state.allCategories);

	useEffect(() => {
		dispatch(getAllProductsAction(""));
		dispatch(getAllCategoriesAction());
	}, [dispatch]);

	return (
		<section className="pb-5">
			<Navbar />

			<CarouselSection />
			<CategorySection
				dataCategories={dataCategories}
				isLoadingCategory={isLoadingCategory}
				isErrorCategory={isErrorCategory}
			/>
			<NewSection data={data} isLoading={isLoading} isError={isError} />
			<PopularSection data={data} isLoading={isLoading} isError={isError} />

			<FilterModal />
		</section>
	);
};

export default HomePage;
