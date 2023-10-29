import React from 'react';
import './address.css';

const Address = () => {
  return (
    <div id="address-modal">   
      <div className="modal fade" id="address" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border border-bottom-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 pt-1">
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold mb-4">Choose another address</h3>
                <button className="btn-add-address mb-4" data-bs-target="#add-address" data-bs-toggle="modal"><p className="fw-bold mt-3">Add new address</p></button>
                {/* Card Address */}
                <div className="card-in-modal card-selected mb-4">
                  <h6 className="fw-bold">Andreas Jane</h6>
                  <p style={{ fontSize:"0.85rem" }}>Perumahan Sapphire Mediterania, Wiradadi, Kec. Sokaraja, Kabupaten Banyumas, Jawa Tengah, 53181 [Tokopedia Note: blok c 16] Sokaraja, Kab. Banyumas, 53181</p>
                  <button className="border border-0 bg-white fw-bold p-0 text-red">Change address</button>
                </div>
                <div className="card-in-modal">
                  <h6 className="fw-bold">Jane Blizinki</h6>
                  <p style={{ fontSize:"0.85rem" }}>Jl. Raya KH Abdul Halim No 119, Majalengka Kulon, Kec. Majalengka, Kabupaten Majalengka, 45418</p>
                  <button className="border border-0 bg-white fw-bold p-0 text-red">Change address</button>
                </div>
              </div>
            </div>          
          </div>
        </div>
      </div>
      <div className="modal fade" id="add-address" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header border border-bottom-0">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-5 pt-1">
              <div className="d-flex flex-column align-items-center">
                <h3 className="fw-bold mb-4">Add new address</h3>           
                <form className="row g-3">
                  <div className="col-12">
                    <label for="address-as" className="form-label fs-input">Save address as (ex : home address, office address)</label>
                    <input type="text" className="form-control fs-input p-input" id="address-as" placeholder="Rumah"/>
                  </div>
                  <div className="col-md-6">
                    <label for="name" className="form-label fs-input">Recipient's name</label>
                    <input type="email" className="form-control fs-input p-input" id="name"/>
                  </div>
                  <div className="col-md-6">
                    <label for="telp" className="form-label fs-input">Recipient's telephone number</label>
                    <input type="password" className="form-control fs-input p-input" id="telp"/>
                  </div>
                  <div className="col-md-6">
                    <label for="address" className="form-label fs-input">Address</label>
                    <input type="email" className="form-control fs-input p-input" id="address"/>
                  </div>
                  <div className="col-md-6">
                    <label for="postal-code" className="form-label fs-input">Postal code</label>
                    <input type="password" className="form-control fs-input p-input" id="postal-code"/>
                  </div>
                  <div className="col-md-6">
                    <label for="city" className="form-label fs-input">City or Subdistrict</label>
                    <input type="password" className="form-control fs-input p-input" id="city"/>
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
            <div className="modal-footer border border-top-0 p-5 pt-1 gap-3">
              <button className="btn-cancel" data-bs-target="#address" data-bs-toggle="modal">Cancel</button>
              <button className="btn-save" data-bs-target="#address" data-bs-toggle="modal">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;