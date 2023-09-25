import React from "react";
import { useNavigate } from 'react-router-dom';
import './nav.css';
import svgLogo from "../../../assets/profile/logo.svg";
import svgDp from "../../../assets/profile/dp.svg";


const Navbar2 = () => {
  const navigate = useNavigate();
  return (
    <div className="position-absolute bg-white d-flex flex-row align-items-center nav-shadow" style="width:100%; height:15%; ">
      <div className="d-flex flex-row" style="width:70%">
        <div className="ms-nav">
          <a href="#"><img src={ svgLogo } alt="Logo" /></a>
        </div>
  
        <form className="d-flex position-relative" role="search" style="margin-left:6%; width:55% ">
          <input className="form-control me-2 py-2 ps-3 pe-5 border-gray" type="search" placeholder="Search" aria-label="Search" style="border-radius: 20px;" />
          <button className="btn btn-search position-absolute" type="submit" style="right:18px; top:2px"><i className="bi bi-search fs-6"></i></button>
        </form>
  
        {/* Button trigger modal */}
        <button type="button" className="btn btn-light border-gray" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i className="bi bi-funnel"></i>
        </button>
      </div>

      {/* Navbar setelah login */}
      <div class="d-flex flex-row justify-content-end gap-nav" style="width:30%;">
        <a href="#"><i class="bi bi-cart2 fs-4 text-gray"></i></a>
        <a href="#"><i class="bi bi-bell fs-4 text-gray"></i></a>
        <a href="#"><i class="bi bi-envelope fs-4 text-gray"></i></a>
        <img src={ svgDp } alt="" style="width:32px; margin-right:15%;"/>
      </div> 
    </div>
  );
}

export default Navbar2;