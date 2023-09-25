import React from "react";
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Navbar1 from '../../components/Global/Navbar/nav1';
import Navbar2 from '../../components/Global/Navbar/nav2';
import FilterModal from '../../components/Global/Navbar/filter_modal';

import svgDp from "../../../assets/profile/dp.svg";
import svgIconAccount from "../../../assets/profile/icon-account.svg";
import svgIconLocate from "../../../assets/profile/icon-locate.svg";
import svgIconMyOrder from "../../../assets/profile/icon-myorder.svg";
import svgDpLarge from "../../../assets/profile/dp-large.svg";


const Navbar1 = () => {
  const navigate = useNavigate();
  return (
    <div className="container-float">    
      <Navbar1 />
      {/* or */}
      {/* <Navbar2 /> */}

      <div className="d-flex flex-row height-content">
        {/* Sidebar */}
        <div style="width:29%; margin-top: 11%;">
          <div className="sidebar2">          
            <div className="centering">
              <img src={ svgDp } alt="" style="width:60px; border-radius: 50%;" className="float-start me-3"/>
              <div>
                <p className="fw-bold mb-2">Johanes Mikael</p>
                <p className="fs-09 mb-0 text-gray2"><i className="bi bi-pencil-fill"></i> Ubah profile</p>
              </div>
            </div>

            <div style="margin-top:31%;" className="d-flex flex-row align-items-center">
              <img src={ svgIconAccount } alt="" style="width:32px;"/>
              <p className="fw-semibold mb-0 ms-3 fs-09">My Account</p>           
            </div>

            <div style="margin-top:8%;" className="d-flex flex-row align-items-center">
              <img src={ svgIconLocate } alt="" style="width:32px;"/>
              <p className="mb-0 ms-3 fs-09 text-gray2" >Shipping Address</p>           
            </div>

            <div style="margin-top:8%;" className="d-flex flex-row align-items-center">
              <img src={ svgIconMyOrder } alt="" style="width:32px;"/>
              <p className="mb-0 ms-3 fs-09 text-gray2" >My Order</p>           
            </div>
          </div>
          
        </div>

        {/* Content */}
        <div className="bg-lightGray" style=" width:71%;">
          <div className="border bg-white content">
            
            <div className="row mx-3" style="margin-top:3.5%;">
              <div className="col ">
                <h5 className="fw-bold">My Profile</h5>
                <p className="fs-09 text-gray2">Manage your profile Information</p>
                <hr/>
              </div>
            </div>
            
            <div className="row" style="margin: 1rem 1.7rem;">            
                <div className="col-flexauto form-profile">
                  {/* If Screen < 768 */}
                  <div className="update-image">
                    <img src={ svgDpLarge } alt="" width="110px"/>
                    <button type="button" className="btn-selectImage">Select Image</button>
                  </div>
                  {/* ---------------- */}

                  <form action="">
                    <div className="row mb-4" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2">Name</label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto" style="width:67%">
                        <input type="text" className="px-3" id="name" value="Johanes Mikael"/>
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
      
                    <div className="row mb-4" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2">Email</label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto" style="width:67%">
                        <input type="email" className="px-3" id="name" value="johanes@gmail.com"/>
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
      
                    <div className="row mb-4" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2">Phone Number</label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto" style="width:67%">
                        <input type="number" className="px-3" id="name" value="08901289012"/>
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
      
                    <div className="row mb-4" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2">Gender</label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto d-flex flex-row align-items-center p-0" style="width:67%">
                        <div className="form-check form-check-inline ms-3">
                          <input className="form-check-input" type="radio" name="gender" id="laki-laki" value="Laki-laki"/>
                          <label className="form-check-label fs-09 text-gray2" for="laki-laki">Laki-laki</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="perempuan" value="Perempuan"/>
                          <label className="form-check-label fs-09 text-gray2" for="perempuan">Perempuan</label>
                        </div>                  
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
      
                    <div className="row mb-5" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2">Date of birth</label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto" style="width:67%">
                        <div className="d-flex flex-row gap-3">
                          <select className="form-select fs-09 text-gray2 py-2" aria-label="Default select example">
                            <option selected value="1">1</option>
                            <option value="2">2</option>
                            <option value="4">3</option>
                            <option value="31">31</option>
                          </select>
                          <select className="form-select fs-09 text-gray2 py-2" aria-label="Default select example">
                            <option selected value="Januari">Januari</option>
                            <option value="Februari">Februari</option>
                            <option value="Maret">Maret</option>
                            <option value="April">April</option>
                          </select>
                          <select className="form-select fs-09 text-gray2 py-2" aria-label="Default select example">
                            <option selected>1990</option>
                            <option value="1991">1991</option>
                            <option value="1992">1992</option>
                            <option value="1993">1993</option>
                          </select>                      
                        </div>
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
      
                    <div className="row" style="height:47px;">
                      <div className="col-flexauto d-flex flex-row justify-content-end align-items-center p-0 width-personal">
                        <label for="name" className="fs-09 text-gray2"></label>
                      </div>
                      <div className="col-flexauto" style="width:3%"></div>
                      <div className="col-flexauto" style="width:67%">
                        <button type="button" className="btn-save">Save</button>
                      </div>
                      <div className="col-flexauto" style="width:6%"></div>
                    </div>
                  </form>           
                </div>
                
                {/* Image */}
                <div className="change-image">
                  <img src={ svgDpLarge } alt="" width="110px"/>
                  <button type="button" className="btn-selectImage">Select Image</button>
                </div>
            </div>
              
          </div>
        </div>
      </div>
      
      <FilterModal />
    </div>
  
  );
}

export default Navbar1;