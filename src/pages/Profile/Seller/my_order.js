import React from "react";
import './my_order.css';

const MyOrder = () => {
  return(
    <div id="my-order">
      <div className="content">
        <div className="m-4">
          <h5 className="fw-bold">My order</h5>
          <nav>
            <div class="nav nav-underline gap" id="nav-tab" >
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-allitems">All items</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-notyetpaid">Not yet paid</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-packed">Packed</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-sent">Sent</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-completed">Completed</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-ordercancel">Order cancel</button>
            </div>
            <hr style={{ marginTop:0 }}/>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-allitems" role="tabpanel">
              content All items
            </div>
            <div class="tab-pane fade" id="nav-notyetpaid" role="tabpanel">
              content Not yet paid
            </div>
            <div class="tab-pane fade" id="nav-packed" role="tabpanel">
              content Packed
            </div>
            <div class="tab-pane fade" id="nav-sent" role="tabpanel">
              content Sent
            </div>
            <div class="tab-pane fade" id="nav-completed" role="tabpanel">
              content Completed
            </div>
            <div class="tab-pane fade" id="nav-ordercancel" role="tabpanel">
              content Order cancel
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder;