import React from "react";
import Card from "../Global/Card";

const PopularSection = () => {
  return (
    <section id="page-home">
      <div className="title-popular">
        <h1>Popular</h1>
        <p>Find clothes that are trending recently</p>
      </div>
      <div>
        <Card />
      </div>
    </section>
  );
};

export default PopularSection;
