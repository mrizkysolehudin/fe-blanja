import React from "react";
import { useNavigate } from 'react-router-dom';

// Taruh filter modal di sebelum tutup body
const Filter = () => {
  const navigate = useNavigate();
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5 fw-bolder" id="exampleModalLabel">Filter</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <h6 className="fw-bold">Colors</h6>
          
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>  
  );
}

export default Filter;