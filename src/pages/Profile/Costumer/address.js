import React from "react";
import './address.css';

const Address = () => {
  return(
    <div id="address">
      <div className="content">

        {/* Header Address */}
        <div className="row mx-3" style={{ marginTop: "3.5%" }}>
          <div className="col">
            <h5 className="fw-bold">Choose Another Address</h5>
            <p className="text1">Manage your shipping address</p>
            <hr className="mb-0" />
          </div>
        </div>

        {/* Content Address */}
        <div className="content-address">
          {/* Button Add new address */}
          <button className="btn-add-address mt-4" 
            data-bs-toggle="modal" 
            data-bs-target="#newAddressModal">
             <p className="fw-bold mt-3">Add new address</p>
          </button>
          {/* Card Address */}
          <div className="card-in-modal card-selected mt-4">
            <h6 className="fw-bold">Andreas Jane</h6>
            <p style={{ fontSize:"0.85rem" }}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
            <button className="btn-red">Change address</button>
          </div>
          {/* Card Address */}
          <div className="card-in-modal mt-4">
            <h6 className="fw-bold">Jane Blizinki</h6>
            <p style={{ fontSize:"0.85rem" }}>Jl. Raya KH Abdul Halim No 119, Majalengka Kulon, Kec. Majalengka, Kabupaten Majalengka, 45418</p>
            <button className="btn-red">Change address</button>
          </div>
        </div>
      </div>

      {/* Modal Add New Address */}
      <div  class="modal fade" id="newAddressModal" tabindex="-1" aria-labelledby="newAddressModalLabel" >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header border border-bottom-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body p-5 pt-1">
            <div className="d-flex flex-column align-items-center">
              <h3 className="fw-bold mb-4">Add new address</h3>           
              <form className="row g-3">

                <div className="col-12">
                  <label for="address-as" className="form-label fs-input">Save address as (ex : home address, office address)</label>
                  <input type="text" className="form-control field-inmodal" id="address-as" placeholder="Rumah"/>
                </div>

                <div className="col-6 col-full">
                  <label for="name" className="form-label fs-input">Recipient's name</label>
                  <input type="text" className="form-control field-inmodal" id="name"/>
                </div>
                <div className="col-6 col-full">
                  <label for="telp" className="form-label fs-input">Recipient's telephone number</label>
                  <input type="number" className="form-control field-inmodal" id="telp"/>
                </div>

                <div className="col-6 col-full">
                  <label for="addressInput" className="form-label fs-input">Address</label>
                  <input type="text" className="form-control field-inmodal" id="addressInput"/>
                </div>
                <div className="col-6 col-full">
                  <label for="postal-code" className="form-label fs-input">Postal code</label>
                  <input type="number" className="form-control field-inmodal" id="postal-code"/>
                </div>

                <div className="col-6 col-full">
                  <label for="city" className="form-label fs-input">City or Subdistrict</label>
                  <input type="text" className="form-control field-inmodal" id="city"/>
                </div>  

                <div className="col-12">
                  <div className="form-check">
                    <input className="form-check-input p-2" type="checkbox" id="check-address" style={{border: "1px solid #9B9B9B"}}/>
                    <label className="form-check-label fs-input" for="check-address">
                      Make it the primary address
                    </label>
                  </div>
                </div>
              </form>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn-cancel" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn-save">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Address;