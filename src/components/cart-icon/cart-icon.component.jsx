import React from "react";
import "./cart-icon.styles.scss";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
function CartIcon() {
  const cartCount = useSelector(selectCartCount);

  return (
    <div className="cart-icon-container">
      <img className="cart-img" src="https://cdn-icons-png.flaticon.com/128/665/665865.png" alt="" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIcon;
