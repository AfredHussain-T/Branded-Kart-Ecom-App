import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">Branded Cart</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://cdn-icons-png.flaticon.com/128/1999/1999625.png"
              alt=""
            />
            <p className="name">Afred</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
