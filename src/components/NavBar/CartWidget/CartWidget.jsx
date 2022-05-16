import React from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {

	const { quantity } = useCartContext();

return (
    <>
      {quantity() > 0 ? (
        <Link type="button" className="btn btn-warning position-relative" to="/Cart">
          <i className="fa-solid fa-cart-shopping" />
          <span>
            {quantity()}
          </span>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartWidget
