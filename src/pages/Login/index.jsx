import React from "react";
import Logo from "../../assets/icons/shoppingBag.svg";
import "./login.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          {/* Logo Start */}
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Logo} alt="shopbag" />
              <h1 className="mt-3 ms-2 fnt-color metropolis-b fs-3">Blanja</h1>
            </div>
          </div>
          {/* Logo End */}
          {/* Text Start */}
          <div className="row mt-3">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="title-p">Please login with your account</p>
            </div>
          </div>
          {/* Text End */}
          {/* Button Start */}
          <div className="row justify-content-center ">
            <div
              className="col-2 nav nav-pills d-flex  justify-content-center align-items-center"
              id="tab"
              role="tablist"
            >
              <div className="btn-group w-100 d-flex justify-content-center align-items-center">
                <button
                  id="v-pills-customer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-customer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-customer"
                  aria-selected="true"
                >
                  Customer
                </button>
                <button
                  id="v-pills-seller-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-seller"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-seller"
                  aria-selected="false"
                >
                  Seller
                </button>
              </div>
            </div>
          </div>
          {/* Button End */}
          {/* Input Start */}
          <form>
            <div className="tab-content" id="v-pills-tabContent">
              {/* customers start */}
              <div
                className="tab-pane fade show active"
                id="v-pills-customer"
                role="tabpanel"
                aria-labelledby="v-pills-customer-tab"
              >
                <div className="row mt-4 my-3 justify-content-center">
                  <div className="col-lg-4 ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-lg-4">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-4 mb-4 justify-content-center">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <button className="btn btn-danger rounded-pill w-100">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              {/* customers end */}
              {/* seller start */}
              <div
                className="tab-pane fade"
                id="v-pills-seller"
                role="tabpanel"
                aria-labelledby="v-pills-seller-tab"
              >
                <div className="row mt-4 my-3 justify-content-center">
                  <div className="col-lg-4 ">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-3 justify-content-center">
                  <div className="col-lg-4">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row mt-4 mb-4 justify-content-center">
                  <div className="col-lg-4 d-flex justify-content-center">
                    <button className="btn btn-danger rounded-pill w-100">
                      Login
                    </button>
                  </div>
                </div>
              </div>
              {/* seller end */}
            </div>
          </form>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="nav-link text-danger">
                  <span className="">Register</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register End */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
