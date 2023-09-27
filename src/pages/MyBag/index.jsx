import React from "react";
import Navbar from "../../components/Global/Navbar";
import "./mybag.css";

const myBag = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <section className="bag-title">
        <h1>My Bag</h1>
      </section>
    </main>
  );
};

export default myBag;
