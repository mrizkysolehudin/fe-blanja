import React from "react";
import './my_order.css';
import svgNoProduct from '../../../assets/img/profile/seller/no-order.svg';

const MyOrder = () => {
  return(
    <div id="my-order">
      <div className="content">
        <div className="m-4">
          <h5 className="fw-bold">My order</h5>
          <nav>
            <div className="nav nav-underline gap" id="nav-tab" >
              <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-allitems">All items</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-notyetpaid">Not yet paid</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-packed">Packed</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-sent">Sent</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-completed">Completed</button>
              <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-ordercancel">Order cancel</button>
            </div>
            <hr style={{ marginTop:0 }}/>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            {/* All Items */}
            <div className="tab-pane fade show active" id="nav-allitems" role="tabpanel">
              <div className="input-icons">
                <i className="bi bi-search icon"></i>
                <input className="input-field" type="text" placeholder="Search"/>
              </div>

              <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: 340 }}>
                  <img src={svgNoProduct} alt="no-order"/>
                </div>
            </div>

            {/* Not yet paid */}
            <div className="tab-pane fade" id="nav-notyetpaid" role="tabpanel">
              content Not yet paid
            </div>

            {/* Packed */}
            <div className="tab-pane fade" id="nav-packed" role="tabpanel">
              content Packed
            </div>

            {/* Sent */}
            <div className="tab-pane fade" id="nav-sent" role="tabpanel">
              content Sent
            </div>

            {/* Completed */}
            <div className="tab-pane fade" id="nav-completed" role="tabpanel">
              content Completed
            </div>

            {/* Order cancel */}
            <div className="tab-pane fade" id="nav-ordercancel" role="tabpanel">
              content Order cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder;