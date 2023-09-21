import "./_Cart.scss";
import React from "react";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Wheelchair } from "../../assets/icons/wheelchair.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const totalPrice = () => {
    return cart.reduce((sum, item) => {
      return sum + item.product_price * item.count;
    }, 0);
  };

  function goBack() {
    navigate(-1);
  }

  return (
    <section className="cart">
          <div className="cart__back-accessibility-wrapper">
            <button className="cart__back-btn" onClick={goBack}>
              <Back className="cart__back-icon" />
            </button>
            <button className="cart__accessibility-btn">
              <Wheelchair className="cart__accessibility-icon" />
            </button>
          </div>

          <h1 className="cart__heading">Shopping Cart</h1>

      {cart.map((item, index) => (
        <CartItem key={`cart-item-${index}`} product={item} />
      ))}
      <article className="cart__checkout-profile-btns-wrapper">
        <button
          className="cart__checkout-btn"
          onClick={() => navigate("/checkout")}
        >{`${cart.length} Item${
          cart.length > 1 || cart.length === 0 ? "s" : ""
        }(${
          cart.length > 0 ? formatPrice(totalPrice(), true) : ""
        }) - Checkout`}</button>
        <button
          className="cart__profile-btn"
          onClick={() => navigate("/profile")}
        >
          Create Profile Before Checkout
        </button>
      </article>
    </section>
  );
};

export default Cart;
