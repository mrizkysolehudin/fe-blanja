import React from "react";
import './selling_product.css';
import svgUpload from '../../../assets/img/profile/seller/upload-product.svg';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Selling(){
  const [value, setValue] = React.useState('');
	return (
    <div id="selling">

      {/* Inventory */}
      <div className="content" style={{ marginTop: 145 }}>
        {/* Header */}
        <div className="row">
          <div className="col">
            <h5 style={{ margin: '0 2rem', fontWeight: 'bold' }}>Inventory</h5>
            <hr />
          </div>
        </div>
        {/* Input */}
        <div className="row" style={{ margin: ".7rem 2rem" }}>
          <label for="name" className="form-label labeling">Name of goods</label>
          <input type="email" className="form-control" id="name" style={{ width: 350, height: 48}}/>
        </div>
      </div>

      {/* Items details */}
      <div className="content" style={{ marginTop: 30 }}>
        {/* Header */}
        <div className="row">
          <div className="col">
            <h5 style={{ margin: '0 2rem', fontWeight: 'bold' }}>Items details</h5>
            <hr />
          </div>
        </div>

        {/* Input */}
        <div className="row" style={{ margin: ".7rem 2rem" }}>
          <label for="name" className="form-label labeling">Unit price</label>
          <input type="email" className="form-control" id="name" style={{ width: 350, height: 48}}/>
        </div>

        <div className="row" style={{ margin: "1.8rem 2rem" }}>
          <label for="name" className="form-label labeling">Stock</label>
          <div className="px-0 d-flex align-items-center gap-2">
            <input type="email" className="form-control" id="name" style={{ width: 350, height: 48}}/>
            <label for="name" className="form-label m-0 labeling">Buah</label>
          </div>          
        </div>

        <div className="row" style={{ margin: "0 2rem" }}>
          <label for="name" className="form-label labeling">Stock</label>
          <div className="px-0 d-flex gap-5">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="rb_stock" id="baru" value="baru" checked/>
              <label className="form-check-label labeling" for="baru">Baru</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="rb_stock" id="bekas" value="bekas"/>
              <label className="form-check-label labeling" for="bekas">Bekas</label>
            </div>
          </div>              
        </div>
      </div>

      {/* Photo of goods */}
      <div className="content" style={{ marginTop: 30 }}>
        {/* Header */}
        <div className="row">
          <div className="col">
            <h5 style={{ margin: '0 2rem', fontWeight: 'bold' }}>Photo of goods</h5>
            <hr />
          </div>
        </div>
        {/* Input */}
        <div className="row frame-photo">
          
          <div className="d-flex flex-row align-items-center gap-3 px-4 mt-4">
            <img src={svgUpload} alt='upload-foto' style={{ width: '25%' }}/>
            <img src={svgUpload} alt='upload-foto' style={{ width: '15%' }}/>
            <img src={svgUpload} alt='upload-foto' style={{ width: '15%' }}/>
            <img src={svgUpload} alt='upload-foto' style={{ width: '15%' }}/>
            <img src={svgUpload} alt='upload-foto' style={{ width: '15%' }}/>
          </div>
          <p className="text-photo">Foto Utama</p>
          <hr style={{ margin:0 }}/>
          <div className="d-flex justify-content-center my-4">
            <button type="button" className="btn-upload">Upload foto</button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="content" style={{ marginTop: 30}}>
        {/* Header */}
        <div className="row">
          <div className="col">
            <h5 style={{ margin: '0 2rem', fontWeight: 'bold' }}>Description</h5>
            <hr />
          </div>
        </div>
        {/* Input */}
        <div style={{ height: 300, margin: '.7rem 2rem' }}>
          <ReactQuill theme="snow" value={value} onChange={setValue} style={{ height: 200}}/>
        </div>        
      </div>

      <div className="btn-position">
        <button type="button" className="btn-jual">Jual</button>
      </div>
      

    </div>		
	);
};

export default Selling;
