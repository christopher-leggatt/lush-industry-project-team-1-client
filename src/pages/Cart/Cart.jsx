import "./_Cart.scss";
import React from "react";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { ReactComponent as Wheelchair } from "../../assets/icons/wheelchair.svg";
import { ReactComponent as Add } from "../../assets/icons/increase_qty.svg";
import { ReactComponent as Remove } from "../../assets/icons/decrease_qty.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount, decreaseCount } from "../../state/cartSlice";
import { formatPrice } from "../../utils";
import cartSlice from "../../state/cartSlice";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  // const totalPrice = () => {
  //   return cart.reduce((sum, item) => sum + item.product_price * item.count, 0);
  // };

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
        <CartItem key={`cart-item-${index}`} product={item}/>
        // <article
        //   className="cart__cart-item cart-item"
        //   key={`cart-item-${index}`}
        // >
        //   <div className="cart-item__name-price-wrapper">
        //     <h2 className="cart-item__item-name">{item.product_name}</h2>
        //     <h2 className="cart-item__item-price">
        //       {formatPrice(item.product_price, true)}
        //     </h2>
        //     <aside className="cart-item__item-counter-wrapper">
        //       <h3 className="cart-item__item-counter">{item.count}</h3>
        //     </aside>
        //   </div>
        //   <div className="cart-item__cart-item-card" style={{backgroundImage: "url(product.image)"}}>
        //     <div className={`cart-item__btns-wrapper`}>
        //       <button
        //         className={`cart-item__decrease-btn decrease-btn`}
        //         aria-label="Decrease count"
        //         onClick={() => decreaseCount()}
        //       >
        //         <Remove className={`decrease-btn__decrease-icon`} />
        //       </button>

        //       <button
        //         className={`cart-item__increase-btn increase-btn ${
        //           item.purchaseType === "inshop" &&
        //           item.product_inshop_stock > 0 &&
        //           item.product_inshop_stock === item.count
        //             ? "cart-item__increase-btn--disabled"
        //             : ""
        //         }`}
        //         aria-label="Increase count"
        //         onClick={() => {
        //           if (
        //             (item.purchaseType === "inshop" &&
        //               item.count !== item.product_inshop_stock) ||
        //             (item.purchaseType === "online" &&
        //               item.count !== item.product_online_stock)
        //           ) {
        //             increaseCount();
        //           }
        //         }}
        //         disabled={
        //           item.purchaseType === "inshop" &&
        //           item.product_inshop_stock > 0 &&
        //           item.product_inshop_stock === item.count
        //             ? true
        //             : false
        //         }
        //       >
        //         <Add className={`increase-btn__increase-icon`} />
        //       </button>
        //     </div>
        //   </div>
        // </article>
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
