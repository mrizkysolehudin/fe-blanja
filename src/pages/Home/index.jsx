// import React from "react";
// // import { useDispatch } from "react-redux";
// // import { logoutAction } from "../../redux/reducers/authSlice";
// import Navbar from "../../components/Global/Navbar";
// import Card from "../../components/Global/Card";
// import { Carousel } from "react-responsive-carousel";
// import Image1 from "../../assets/img/Trends in.png";
// import Image2 from "../../assets/img/Black edition.png";
// import Image3 from "../../assets/img/ian.png";
// import Image4 from "../../assets/img/jas.png";
// import Image5 from "../../assets/img/T-shirt.png";
// import Image6 from "../../assets/img/short.png";
// import Image7 from "../../assets/img/jacket.png";
// import Image8 from "../../assets/img/pants.png";
// import Image9 from "../../assets/img/shoes.png";
// import "./home.css";

// const HomePage = () => {
//   //   const dispatch = useDispatch();
//   return (
//     <section>
//       <main className="navbar">
//         <Navbar />
//       </main>
//       {/* start corousel */}
//       <main>
//         <Carousel>
//           <div
//             id="carouselExampleDark"
//             className="carousel carousel-dark slide"
//           >
//             <div className="carousel-indicators">
//               <button
//                 type="button"
//                 data-bs-target="#carouselExampleDark"
//                 data-bs-slide-to="0"
//                 className="active"
//                 aria-current="true"
//                 aria-label="Slide 1"
//               ></button>
//               <button
//                 type="button"
//                 data-bs-target="#carouselExampleDark"
//                 data-bs-slide-to="1"
//                 aria-label="Slide 2"
//               ></button>
//               <button
//                 type="button"
//                 data-bs-target="#carouselExampleDark"
//                 data-bs-slide-to="2"
//                 aria-label="Slide 3"
//               ></button>
//             </div>
//             <div
//               className="carousel-inner"
//               //  style={{ marginLeft: "6%" }}
//             >
//               <div
//                 className="carousel-item active d-flex ml-5"
//                 data-bs-interval="10000"
//                 style={{ marginLeft: "6%" }}
//               >
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image3} className="d-block w-20" alt="..." />
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image1} className="d-block w-20" alt="..." />
//                   <p>Trends in 2020</p>
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image2} className="d-block w-20" alt="..." />
//                   <p>Black edition</p>
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image4} className="d-block w-20" alt="..." />
//                 </div>
//                 {/* <div class="carousel-caption d-none d-md-block">
//                   <h5>First slide label</h5>
//                   <p>
//                     Some representative placeholder content for the first slide.
//                   </p>
//                 </div> */}
//               </div>
//               {/* <div
//                 className="carousel-item d-flex"
//                 data-bs-interval="2000"
//                 style={{ marginLeft: "6%" }}
//               >
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image3} className="d-block w-20" alt="..." />
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image1} className="d-block w-20" alt="..." />
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image2} className="d-block w-20" alt="..." />
//                 </div>
//                 <div style={{ marginRight: "2%" }}>
//                   <img src={Image4} className="d-block w-20" alt="..." />
//                 </div> */}
//               {/* <div class="carousel-caption d-none d-md-block">
//                   <h5>Second slide label</h5>
//                   <p>
//                     Some representative placeholder content for the second
//                     slide.
//                   </p>
//                 </div> */}
//               {/* </div> */}
//               <div class="carousel-item">
//                 <img src={Image2} class="d-block w-20" alt="..." />
//                 {/* <div class="carousel-caption d-none d-md-block">
//                   <h5>Third slide label</h5>
//                   <p>
//                     Some representative placeholder content for the third slide.
//                   </p>
//                 </div> */}
//               </div>
//             </div>
//             <button
//               class="carousel-control-prev"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="prev"
//               style={{ marginLeft: "5%" }}
//             >
//               <span
//                 class="carousel-control-prev-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Previous</span>
//             </button>
//             <button
//               class="carousel-control-next"
//               type="button"
//               data-bs-target="#carouselExampleDark"
//               data-bs-slide="next"
//               style={{ marginRight: "6%" }}
//             >
//               <span
//                 class="carousel-control-next-icon"
//                 aria-hidden="true"
//               ></span>
//               <span class="visually-hidden">Next</span>
//             </button>
//           </div>
//         </Carousel>
//       </main>
//       {/* end corousel */}
//       {/* start category */}
//       <main>
//         <div className="title-category">
//           <h1>Category</h1>
//           <p>What are you currently looking for</p>
//         </div>
//         <div className="category d-flex justify-content-center">
//           <div
//             className="category1 d-flex rounded-3` "
//             style={{ marginLeft: "6%" }}
//           >
//             <img src={Image5} alt="T-shirt" />
//             <p>T-shirt</p>
//           </div>
//           <div
//             className="category2 d-flex rounded-3` "
//             style={{ marginLeft: "6%" }}
//           >
//             <img src={Image6} alt="Short" />
//             <p>Short</p>
//           </div>
//           <div
//             className="category3 d-flex rounded-3` "
//             style={{ marginLeft: "6%" }}
//           >
//             <img src={Image7} alt="Jacket" />
//             <p>Jacket</p>
//           </div>
//           <div
//             className="category4 d-flex rounded-3`"
//             style={{ marginLeft: "6%" }}
//           >
//             <img src={Image8} alt="Pants" />
//             <p>Pants</p>
//           </div>
//           <div
//             className="category5 d-flex rounded-3` "
//             style={{ marginLeft: "6%" }}
//           >
//             <img src={Image9} alt="Shoes" />
//             <p>Shoes</p>
//           </div>
//         </div>
//       </main>
//       {/* end category */}
//       <main>
//         <div className="title-new">
//           <h1>New</h1>
//           <p>You’ve never seen it before!</p>
//         </div>
//         <div>
//           <Card />
//         </div>
//       </main>
//       <main>
//         <div className="title-popular">
//           <h1>Popular</h1>
//           <p>Find clothes that are trending recently</p>
//         </div>
//         <div>
//           <Card />
//         </div>
//       </main>
//     </section>
//   );
// };

// export default HomePage;

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

const HomePage = () => {
	const dispatch = useDispatch();
	const { data, isLoading, isError } = useSelector((state) => state.allProducts);

	useEffect(() => {
		dispatch(getAllProductsAction(""));
	}, [dispatch]);

	return (
		<section>
			<Navbar />

			<CarouselSection />
			<CategorySection />
			<NewSection />
			<PopularSection data={data} isLoading={isLoading} isError={isError} />

			<FilterModal />
		</section>
	);
};

export default HomePage;
