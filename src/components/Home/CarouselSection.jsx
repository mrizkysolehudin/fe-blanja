import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../../assets/img/Trends in.png";
import Image2 from "../../assets/img/Black edition.png";
import Image3 from "../../assets/img/ian.png";
import Image4 from "../../assets/img/jas.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
  return (
    <section style={{ paddingTop: 120 }}>
      <Carousel>
        <div id="page-home" className="carousel carousel-dark slide mt-5">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div
            className="carousel-inner"
            //  style={{ marginLeft: "6%" }}
          >
            <div
              className="carousel-item active d-flex ml-5"
              data-bs-interval="10000"
              style={{ marginLeft: "6%" }}
            >
              <div style={{ marginRight: "2%" }}>
                <img src={Image3} className="d-block w-20" alt="..." />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image1} className="d-block w-20" alt="..." />
                <p>Trends in 2020</p>
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image2} className="d-block w-20" alt="..." />
                <p>Black edition</p>
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image4} className="d-block w-20" alt="..." />
              </div>
              {/* <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>
            Some representative placeholder content for the first slide.
          </p>
        </div> */}
            </div>
            {/* <div
              className="carousel-item d-flex"
              data-bs-interval="2000"
              style={{ marginLeft: "6%" }}
            >
              <div style={{ marginRight: "2%" }}>
                <img src={Image3} className="d-block w-20" alt="..." />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image1} className="d-block w-20" alt="..." />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image2} className="d-block w-20" alt="..." />
              </div>
              <div style={{ marginRight: "2%" }}>
                <img src={Image4} className="d-block w-20" alt="..." />
              </div> */}
            {/* <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>
            Some representative placeholder content for the second
            slide.
          </p>
        </div> */}
            {/* </div> */}
            <div class="carousel-item">
              <img src={Image2} class="d-block w-20" alt="..." />
              {/* <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>
            Some representative placeholder content for the third slide.
          </p>
        </div> */}
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
            style={{ marginLeft: "5%" }}
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
            style={{ marginRight: "6%" }}
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselSection;
