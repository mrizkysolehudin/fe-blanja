import React from "react";
import svgIconAccount from "../../assets/img/profile/seller/icon-store.svg";
import svgIconLocate from "../../assets/img/profile/seller/icon-product.svg";
import svgIconMyOrder from "../../assets/img/profile/seller/icon-order.svg";
import './SidebarSeller.css';


const Sidebar = ({ currentUser, openTab, setOpenTab }) => {
  const [store, setStore] = React.useState(false);
  const [product, setProduct] = React.useState(false);
  const [order, setOrder] = React.useState(false);

  function handleStore() {
    if (store) {
      setStore(false);
      setOpenTab("store");
    } else {
      setOpenTab("store");
      setStore(true);
      setProduct(false);
      setOrder(false);
    }    
  }

  function handleProduct() {
    if (product) {
      setProduct(false);
      setOpenTab("product");
    } else {
      setOpenTab("product");
      setStore(false);
      setProduct(true);
      setOrder(false);
    }
  }

  function handleOrder() {
    if (order) {
      setOrder(false);
      setOpenTab("order");
    } else {
      setOpenTab("order");
      setStore(false);
      setProduct(false);
      setOrder(true);
    }
  }

	return (
		<div id="sidebar-seller">
			<div className="sidebar2">
				<div className="centering" onClick={() => setOpenTab("my_account")}>
					{currentUser?.photo ? (
						<img
							src={currentUser?.photo}
							alt=""
							className="photo"
						/>
					) : (
						<img
							src="https://res.cloudinary.com/dskltx6xi/image/upload/v1694509756/mama_recipe/users/blank_dd1daa.png"
							alt=""
              className="photo"
						/>
					)}

					<div>
						<p className="fw-bold mb-2">{currentUser?.name}</p>
						<p className="text1">
							<i className="bi bi-pencil-fill"></i> Ubah profile
						</p>
					</div>
				</div>

        {/* Store */}
				<div className="side-menu" onClick={() => handleStore()} style={{ marginTop: "31%" }}>
					<img src={svgIconAccount} alt="" style={{ width: "32px" }} />
					<button className={`menu  ${openTab === "store" ? "fw-semibold" : "text-gray"}`} style={{ padding: 0, border: 0, backgroundColor: 'transparent' }}>
						Store
					</button>
				</div>

        <div className={ store ? 'd-flex':'d-none' }>
          <button onClick={() => setOpenTab("store_profile")} className={`sub-menu ${openTab === "store_profile" ? "fw-semibold" : "text-gray"}`}>
            Store profile
          </button>
        </div>
        
        {/* Product */}
				<div className="side-menu" onClick={() => handleProduct()}>
					<img src={svgIconLocate} alt="" style={{ width: "32px" }} />
					<button className={`menu ${openTab === "product" ? "fw-semibold" : "text-gray"}`}>
						Product
					</button>
				</div>

        <div className={`${product ? 'd-flex':'d-none'} flex-column align-items-start`}>
          <button onClick={() => setOpenTab("my_products")} className={`sub-menu ${openTab === "my_products" ? "fw-semibold" : "text-gray"}`}>
            My products
          </button>

          <button onClick={() => setOpenTab("selling")} className={`sub-menu ${openTab === "selling" ? "fw-semibold" : "text-gray"}`}>
            Selling products
          </button>
        </div>
        
        {/* Order */}
				<div className="side-menu" onClick={() => handleOrder()}>
					<img src={svgIconMyOrder} alt="" style={{ width: "32px" }} />
					<button className={`menu ${openTab === "order" ? "fw-semibold" : "text-gray"}`}>
						Order
					</button>
				</div>
        
        <div className={`${order ? 'd-flex':'d-none'} flex-column align-items-start`}>
          <button onClick={() => setOpenTab("my_order")} className={`sub-menu ${openTab === "my_order" ? "fw-semibold" : "text-gray"}`}>
            My order
          </button>

          <button onClick={() => setOpenTab("order_cancel")} className={`sub-menu ${openTab === "order_cancel" ? "fw-semibold" : "text-gray"}`}>
            Order cancel
          </button>
        </div>
        
			</div>
		</div>
	);
};

export default Sidebar;
