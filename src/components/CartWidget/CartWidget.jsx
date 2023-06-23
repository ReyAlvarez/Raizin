import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import React, { useContext } from "react";
import basket from "../../assets/images/basket.svg";

const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return cartTotal() > 0 ? (
    <Link type="button" className="btn btn-light position-relative me-2" to={"/cart"}>
      <img src={basket} alt="cart-widget" className="" width={24} />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
    </Link>
  ) : (
    ""
  );
};
export default CartWidget;
