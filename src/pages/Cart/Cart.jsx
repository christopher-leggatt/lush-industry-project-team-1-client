import "./_Cart.scss";
import React from "react";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Wheelchair } from "../../assets/icons/wheelchair.svg";
import { ReactComponent as Add } from "../../assets/icons/increase_qty.svg";
import { ReactComponent as Remove } from "../../assets/icons/decrease_qty.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(1);
  const [maxCount, setMaxCount] = useState(11);
  const navigate = useNavigate();

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

      <article className="cart__cart-item cart-item">
        <div className="cart-item__name-price-wrapper">
          <h2 className="cart-item__item-name">Twilight</h2>
          <h2 className="cart-item__item-price">$18</h2>
          <aside className="cart-item__item-counter-wrapper">
            <h3 className="cart-item__item-counter">{count}</h3>
          </aside>
        </div>
        <div className="cart-item__cart-item-card">
          <div className={`cart-item__btns-wrapper`}>
            <button
              className={`cart-item__decrease-btn decrease-btn`}
              aria-label="Decrease count"
              onClick={() => setCount(Math.max(count - 1, 1))}
            >
              <Remove className={`decrease-btn__decrease-icon`} />
            </button>

            <button
              className={`cart-item__increase-btn increase-btn ${
                count >= maxCount ? "cart-item__increase-btn--disabled" : ""
              }`}
              aria-label="Increase count"
              onClick={() => {
                if (count < maxCount) {
                  setCount(count + 1);
                }
              }}
              disabled={count >= maxCount}
            >
              <Add className={`increase-btn__increase-icon`} />
            </button>
          </div>
        </div>
      </article>
      <article className="cart__checkout-profile-btns-wrapper">
        <button
          className="cart__checkout-btn"
          onClick={() => navigate("/checkout")}
        >{`${count} Item${count > 1 ? "s" : ""} - Checkout`}</button>
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
