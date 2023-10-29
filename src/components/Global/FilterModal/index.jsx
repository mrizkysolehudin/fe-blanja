import React from "react";
import './filter.css'

// Taruh filter modal di sebelum tutup body
const FilterModal = () => {
	return (
		<div
			className="modal fade"
			id="filter"
			tabIndex="-1"
			aria-labelledby="exampleModalLabel"
			aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">
							Filter
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"></button>
					</div>
					<div className="modal-body p-0">
          <div class="pt-3 px-4">
              <h6 class="fw-bold mb-4">Colors</h6>
              <div class="ms-2 custom-radios">
                <div>
                  <input type="radio" id="color-1" name="color" value="color-1" checked/>
                  <label for="color-1"><span></span></label>
                </div>      
                <div>
                  <input type="radio" id="color-2" name="color" value="color-2" checked/>
                  <label for="color-2"><span></span></label>
                </div>      
                <div>
                  <input type="radio" id="color-3" name="color" value="color-3" checked/>
                  <label for="color-3"><span></span></label>
                </div>    
                <div>
                  <input type="radio" id="color-4" name="color" value="color-4" checked/>
                  <label for="color-4"><span></span></label>
                </div>
                <div>
                  <input type="radio" id="color-5" name="color" value="color-5" checked/>
                  <label for="color-5"><span></span></label>
                </div>
                <div>
                  <input type="radio" id="color-6" name="color" value="color-6" checked/>
                  <label for="color-6"><span></span></label>
                </div>
              </div>
            </div>            
            <hr class="mx-0" style={{ border: "2px solid #cccbcb" }}/>
            <div class="pt-1 px-4">
              <h6 class="fw-bold mb-4">Sizes</h6>
              
            </div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal">
							Close
						</button>
						<button type="button" className="btn btn-primary">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
