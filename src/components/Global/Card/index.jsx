import Image1 from "../../../assets/img/jasnew.png";
import React from "react";
import iconStar from "../../../assets/icons/icon-star.svg";

const Card = () => {
  return (
    <>
      <div className="row g-4">
        <div
          className="content col-lg-3 col-md-4 col-sm-6"
          style={{ marginLeft: "6%" }}
        >
          <div className="card h-100">
            <img
              crossOrigin="anonymous"
              src={Image1}
              className="card-img-top"
              alt="cardImage"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h4 className="card-title text-dark">
                Men's formal suit - Black & White
              </h4>
              <div>
                <h5 className="text-danger metropolis-b">$ 40.0</h5>
                <span className="card-text text-secondary text-break">
                  Zalora Cloth
                </span>
                <div>
                  <img src={iconStar} alt="Star" />
                  <img src={iconStar} alt="Star" />
                  <img src={iconStar} alt="Star" />
                  <img src={iconStar} alt="Star" />
                  <img src={iconStar} alt="Star" />
                  <span className="text-secondary">(10)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
