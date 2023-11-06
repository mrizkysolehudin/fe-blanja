import React from "react";
import './my_order.css';
import svgNoProduct from '../../../assets/img/profile/seller/no-order.svg';

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
            {/* Tab All items */}
            <div class="tab-pane fade show active" id="nav-allitems" role="tabpanel">
              <div className="tab-pane fade show active" id="nav-allitems" role="tabpanel">
                <div className="input-icons">
                  <i className="bi bi-search icon"></i>
                  <input className="input-field" type="text" placeholder="Search"/>
                </div>

                <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                  <thead>
                    <tr style={{ width: '100%', height: 60 }}>
                      <th className="th">Tanggal</th>
                      <th className="th">Nama barang</th>
                      <th className="th">Jumlah</th>
                      <th className="th">Harga</th>
                      <th className="th">Order id</th>
                      <th className="th">Metode Pembayaran</th>   
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td style={{ padding: 10 }}>Tanggal berapa?</td>
                      <td style={{ padding: 10 }}>Nama barang apa?</td>
                      <td style={{ padding: 10 }}>Jumlah berapa?</td>
                      <td style={{ padding: 10 }}>Harga berapa?</td>
                      <td style={{ padding: 10 }}>Order id berapa?</td>
                      <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                    </tr> */}

                    {/* Jika data kosong */}
                    <tr>
                      <td colspan="6">
                        <div className="no-data">
                          <img src={svgNoProduct} alt="no-order"/>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>                
              </div>
            </div>

            {/* Tab Not yet paid */}
            <div class="tab-pane fade" id="nav-notyetpaid" role="tabpanel">
              <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                <thead>
                  <tr style={{ width: '100%', height: 60 }}>
                    <th className="th">Tanggal</th>
                    <th className="th">Nama barang</th>
                    <th className="th">Jumlah</th>
                    <th className="th">Harga</th>
                    <th className="th">Order id</th>
                    <th className="th">Metode Pembayaran</th>   
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                  </tr> */}

                  {/* Jika data kosong */}
                  <tr>
                    <td colspan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tab Packed */}
            <div class="tab-pane fade" id="nav-packed" role="tabpanel">
              <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                <thead>
                  <tr style={{ width: '100%', height: 60 }}>
                    <th className="th">Tanggal</th>
                    <th className="th">Nama barang</th>
                    <th className="th">Jumlah</th>
                    <th className="th">Harga</th>
                    <th className="th">Order id</th>
                    <th className="th">Metode Pembayaran</th>   
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                  </tr> */}

                  {/* Jika data kosong */}
                  <tr>
                    <td colspan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tab Sent */}
            <div class="tab-pane fade" id="nav-sent" role="tabpanel">
              <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                <thead>
                  <tr style={{ width: '100%', height: 60 }}>
                    <th className="th">Tanggal</th>
                    <th className="th">Nama barang</th>
                    <th className="th">Jumlah</th>
                    <th className="th">Harga</th>
                    <th className="th">Order id</th>
                    <th className="th">Metode Pembayaran</th>   
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                  </tr> */}

                  {/* Jika data kosong */}
                  <tr>
                    <td colspan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tab Completed */}
            <div class="tab-pane fade" id="nav-completed" role="tabpanel">
              <div className="input-icons">
                <i className="bi bi-search icon"></i>
                <input className="input-field" type="text" placeholder="Search"/>
              </div>

              <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                <thead>
                  <tr style={{ width: '100%', height: 60 }}>
                    <th className="th">Tanggal</th>
                    <th className="th">Nama barang</th>
                    <th className="th">Jumlah</th>
                    <th className="th">Harga</th>
                    <th className="th">Order id</th>
                    <th className="th">Metode Pembayaran</th>   
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                  </tr> */}

                  {/* Jika data kosong */}
                  <tr>
                    <td colspan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tab Order cancel */}
            <div class="tab-pane fade" id="nav-ordercancel" role="tabpanel">
              <table class="table" style={{ height: 400, border: '1px solid #D4D4D4' }}>
                <thead>
                  <tr style={{ width: '100%', height: 60 }}>
                    <th className="th">Tanggal</th>
                    <th className="th">Nama barang</th>
                    <th className="th">Jumlah</th>
                    <th className="th">Harga</th>
                    <th className="th">Order id</th>
                    <th className="th">Metode Pembayaran</th>   
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <td style={{ padding: 10 }}>Tanggal berapa?</td>
                    <td style={{ padding: 10 }}>Nama barang apa?</td>
                    <td style={{ padding: 10 }}>Jumlah berapa?</td>
                    <td style={{ padding: 10 }}>Harga berapa?</td>
                    <td style={{ padding: 10 }}>Order id berapa?</td>
                    <td style={{ padding: 10 }}>Metode pembayaran apa?</td>
                  </tr> */}

                  {/* Jika data kosong */}
                  <tr>
                    <td colspan="6">
                      <div className="no-data">
                        <img src={svgNoProduct} alt="no-order"/>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrder;