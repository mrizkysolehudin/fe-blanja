import React from "react";
import gopay from "../../../assets/img/gopay.png";
import pos from "../../../assets/img/pos.png";
import mastercard from "../../../assets/img/mastercard.svg";

const Payment = () => {
  return (
    <div id="payment-modal">
      <div
        className="modal fade"
        id="payment"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border border-bottom-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-5 pt-1">
              <div className="d-flex flex-column ">
                <h3 className="fw-bold mb-4">Payment</h3>
                <h5 style={{ fontWeight: 600, marginBottom: 20 }}>
                  Payment method
                </h5>
                <div className="d-flex mb-4">
                  <img
                    src={gopay}
                    alt="gopay"
                    style={{ width: 80, height: 18 }}
                  />
                  <p style={{ marginLeft: "26%" }}>Gopay</p>
                  <input
                    type="checkbox"
                    style={{ marginLeft: 200, marginBottom: 10 }}
                  />
                </div>
                <div className="d-flex mb-4">
                  <img src={pos} alt="pos" style={{ width: 58, height: 40 }} />
                  <p style={{ marginLeft: "29%" }}>Pos Indonesia</p>
                  <input
                    type="checkbox"
                    style={{
                      marginLeft: 145,
                      marginBottom: 10,
                    }}
                  />
                </div>
                <div className="d-flex mb-4">
                  <img
                    src={mastercard}
                    alt="mastercard"
                    style={{ width: 53, height: 40 }}
                  />
                  <p style={{ marginLeft: "30%" }}>MasterCard</p>
                  <input
                    type="checkbox"
                    style={{ marginLeft: 160, marginBottom: 10 }}
                  />
                </div>
              </div>
              <h6 style={{ fontWeight: 600 }}>Shopping summary</h6>
              <div className="d-flex">
                <p style={{ color: "#9B9B9B" }}>Order</p>
                <p style={{ fontWeight: 600, marginLeft: "71%" }}>$ 40.0</p>
              </div>
              <div className="d-flex">
                <p style={{ color: "#9B9B9B" }}>Delivery</p>
                <p style={{ fontWeight: 600, marginLeft: "70%" }}>$ 5.0</p>
              </div>
              <div className="d-flex">
                <div>
                  <p style={{ fontWeight: 600 }}>Shopping summary</p>
                  <p style={{ color: "#DB3022" }}>$ 45.0</p>
                </div>
                <button
                  style={{
                    borderRadius: 15,
                    backgroundColor: "#DB3022",
                    width: 160,
                    height: 36,
                    marginTop: 15,
                    marginLeft: "45%",
                    color: "white",
                  }}
                >
                  buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
