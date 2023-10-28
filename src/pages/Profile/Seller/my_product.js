import React from "react";
import './my_product.css';
import svgNoProduct from '../../../assets/img/profile/seller/no-product.svg';

const MyProduct = () => {
  return (
    <div id="my-product">
      <div className="content">
        <div className="m-4">
          <h5 className="fw-bold">My product</h5>
          <nav>
            <div class="nav nav-underline gap" id="nav-tab" >
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-allitems">All items</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-soldout">Sold out</button>
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#nav-archived">Archived</button>
            </div>
            <hr style={{ marginTop:0 }}/>
          </nav>

          {/* Tab Content */}
          <div class="tab-content" id="nav-tabContent">
            {/* All items */}
            <div class="tab-pane fade show active" id="nav-allitems" role="tabpanel">
              <div class="input-icons">
                <i class="bi bi-search icon"></i>
                <input class="input-field" type="text" placeholder="Search"/>
              </div>

              <div style={{ width: '100%', height: 400, border: '1px solid #D4D4D4' }}>
                <div className="d-flex justify-content-between align-items-center" style={{ width: '100%', height: 60, backgroundColor: '#F6F6F6' }}>
                  <button style={{ color: '#9B9B9B', border: 0, backgroundColor: 'transparent', marginLeft: 30, fontSize: 14, fontWeight: 'bold' }}>Product name <i class="bi bi-chevron-expand ms-2"></i></button>
                  <div>
                    <button style={{ color: '#9B9B9B', border: 0, backgroundColor: 'transparent', fontSize: 14, fontWeight: 'bold' }}>Price <i class="bi bi-chevron-expand ms-2"></i></button>
                    <button style={{ color: '#9B9B9B', border: 0, backgroundColor: 'transparent', margin: '0 50px', fontSize: 14, fontWeight: 'bold' }}>Stock <i class="bi bi-chevron-expand ms-2"></i></button>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', height: 340 }}>
                  <img src={svgNoProduct} alt="no-order"/>
                </div>
              </div>
            </div>

            {/* Sold out */}
            <div class="tab-pane fade" id="nav-soldout" role="tabpanel">
              content Sold out
            </div>

            {/* Archived */}
            <div class="tab-pane fade" id="nav-archived" role="tabpanel">
              content Archived
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProduct;