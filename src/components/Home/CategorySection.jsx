import React from "react";
import Alert from "../Global/Alert";
import NoResult from "../NoResult";
import { Link } from "react-router-dom";

const CategorySection = ({
  dataCategories,
  isLoadingCategory,
  isErrorCategory,
}) => {
  return (
    <section id="page-home">
      <div className="title-category">
        <h1>Category</h1>
        <p>What are you currently looking for</p>
      </div>
      <div className="category d-flex justify-content-center flex-wrap">
        {isLoadingCategory ? (
          <Alert type="loading" />
        ) : isErrorCategory ? (
          <Alert type="error" />
        ) : dataCategories?.length > 0 ? (
          dataCategories?.slice(0, 5)?.map((item, index) => (
            <Link to={`/category/${item?.id}`}>
              <div
                key={index}
                className=" d-flex rounded-3 "
                style={{
                  marginLeft: "5%",
                  borderRadius: "8px",
                  backgroundColor: item?.color,
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  flexDirection: "column  ",
                }}
              >
                <img
                  src={item?.image}
                  alt={item?.name}
                  style={{ display: "block", maxWidth: "100%" }}
                />
                <p className="title-name">{item?.name}</p>
              </div>
            </Link>
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </section>
  );
};

export default CategorySection;
