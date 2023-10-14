import React from "react";
import './my_account.css';

const MyProfile = ({
	data,
	showImage,
	handleChangeImage,
	handleChange,
	handleSubmit,
	isLoading,
	image,
}) => {
	return (
    <div id="my-account">
      <div className="content">

        {/* Header My Account */}
        <div className="row mx-3" style={{ marginTop: "3.5%" }}>
          <div className="col">
            <h5 className="fw-bold">My Profile</h5>
            <p className="text1">Manage your profile Information</p>
            <hr />
          </div>
        </div>

        {/* Form My Account */}
				<form
          onSubmit={handleSubmit}
          className="row"
          style={{ margin: "1rem 1.7rem" }}>

          {/* Form Identity */}
          <div className="form-profile">
            {/* If Screen < 768, Image in Top*/}
            <div className="update-image">
              {showImage || image ? (
                <img
                  src={showImage ?? image}
                  alt=""
                  width="110px"
                  height="110px"
                  style={{ borderRadius: 9999, objectFit: "cover" }}
                />
              ) : (
                <img
                  src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
                  alt=""
                  width="110px"
                  height="110px"
                  style={{ borderRadius: 9999, objectFit: "cover" }}
                />
              )}
              <div className="btn-selectImage container1">
                <p className="mt-3">Select image</p>
                <input
                  type="file"
                  onChange={handleChangeImage}
                  className="stretched-link opacity-0"
                />
              </div>
            </div>

            {/* Identity */}
            <div>
              {/* Name */}
              <div className="row mb-4" style={{ height: "47px" }}>
                {/* Text */}
                <div className="container2 col-text">
                  <label htmlFor="name" className="text1">Name</label>
                </div>                
                <div className="col-flexauto" style={{ width: "3%" }}></div>
                {/* Field */}
                <div className="col-flexauto col-field">
                  <input className="px-3"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                  />
                </div>
                <div className="col-flexauto" style={{ width: "6%" }}></div>
              </div>

              {/* Email */}
              <div className="row mb-4" style={{ height: "47px" }}>
                {/* Text */}
                <div className="container2 col-text">
                  <label htmlFor="name" className="text1">Email</label>
                </div>
                <div className="col-flexauto" style={{ width: "3%" }} />
                {/* Field */}
                <div className="col-flexauto col-field">
                  <input className="px-3"
                    type="email"                    
                    name="email"
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
                <div className="col-flexauto" style={{ width: "6%" }} />
              </div>

              {/* Phone Number */}
              <div className="row mb-4" style={{ height: "47px" }}>
                {/* Text */}
                <div className="container2 col-text">
                  <label htmlFor="name" className="text1">Phone number</label>
                </div>
                <div className="col-flexauto" style={{ width: "3%" }} />
                {/* Field */}
                <div className="col-flexauto col-field">
                  <input className="px-3"
                    type="number"                    
                    name="phone"
                    onChange={handleChange}
                    value={data.phone}
                  />
                </div>
                <div className="col-flexauto" style={{ width: "6%" }} />
              </div>

              {/* Gender */}
              <div className="row mb-4" style={{ height: "47px" }}>
                {/* Text */}
                <div className="container2 col-text">
                  <label htmlFor="name" className="text1">Gender</label>
                </div>
                {/* Field */}
                <div className="col-flexauto" style={{ width: "3%" }} />
                <div className="container3">
                  <div className="form-check form-check-inline ms-3">
                    <input id="male" className="form-check-input"
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="male"
                      checked={data.gender === "male"}
                    />
                    <label htmlFor="male" className="form-check-label text1">Laki-laki</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input id="female" className="form-check-input"
                      type="radio"
                      name="gender"
                      onChange={handleChange}
                      value="female"
                      checked={data.gender === "female"}
                    />
                    <label htmlFor="female" className="form-check-label text1">Perempuan</label>
                  </div>
                  
                </div>
                <div className="col-flexauto" style={{ width: "6%" }} />
              </div>

              {/* Date Of Birth */}
              <div className="row mb-5">
                {/* Text */}
                <div className="container2 col-text">
                  <label htmlFor="name" className="text1">Date of birth</label>
                </div>
                <div className="col-flexauto" style={{ width: "3%" }} />
                {/* Field */}
                <div className="col-flexauto col-field">
                  <div className="d-flex flex-row gap-3">
                    <select defaultValue={1} className="form-select text1 py-2">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={31}>31</option>
                    </select>

                    <select defaultValue="Januari" className="form-select text1 py-2">
                      <option value="Januari">Januari</option>
                      <option value="Februari">Februari</option>
                      <option value="Maret">Maret</option>
                      <option value="April">April</option>
                    </select>

                    <select defaultValue={1990} className="form-select text1 py-2">
                      <option value={1990}>1990</option>
                      <option value={1991}>1991</option>
                      <option value={1992}>1992</option>
                      <option value={1993}>1993</option>
                    </select>
                  </div>
                </div>
                <div className="col-flexauto" style={{ width: "6%" }} />
              </div>
              
              {/* Save Button */}
              <div className="row">
                <div className="col-text"/>
                <div className="col-flexauto" style={{ width: "3%" }} />
                <div className="col-flexauto" style={{ width: "67%" }}>
                  <button disabled={isLoading} type="submit" className="btn-save">
                    {isLoading ? "loading..." : "save"}
                  </button>
                </div>
                <div className="col-flexauto" style={{ width: "6%" }} />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="change-image">
            {showImage || data.image ? (
              <img width="110px" height="110px" style={{ borderRadius: 9999, objectFit: "cover" }}
                src={showImage ?? data.image}
                alt="my_image"                
              />
            ) : (
              <img width="110px" height="110px" style={{ borderRadius: 9999, objectFit: "cover" }}
                src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
                alt="blank_picture"                
              />
            )}

            <div className="btn-selectImage container1">
              <p className="mt-3">Select image</p>
              <input
                type="file"
                onChange={handleChangeImage}
                className="stretched-link opacity-0"
              />
            </div>            
          </div>
        </form>
      </div>
    </div>		
	);
};

export default MyProfile;
