import "./_ItemTile.scss";
import React,{ useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  addToCart,
} from "../../state/cartSlice";
import { useState } from "react";
import { ReactComponent as Add } from "../../assets/icons/increase_qty.svg";
import { ReactComponent as Remove } from "../../assets/icons/decrease_qty.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/cart_small.svg";

const ItemTile = ({ product, size }) => {
  const { product_price, product_name, product_image, id } = product;
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const totalPrice = (price) => {
    return count * price;
  };
  const formattedTotalPrice = formatPrice(totalPrice(product_price));
  const navigate = useNavigate();
  const cartBtnRef = useRef(null);  

  function updateCartBtnWidth() {
    const cartBtn = cartBtnRef.current;
    
    if (!cartBtn) {
      return;
    }

    cartBtn.classList.remove('width-mid', 'width-max');

    if (count < 10 && count > 0) {
      cartBtn.classList.add('width-mid');
    } else if (count >= 10) {
      cartBtn.classList.add('width-max');
    } 
  }

  useEffect(() => {
    updateCartBtnWidth();
  }, [count]);

  return (
    <div className={`item-tile item-tile--${size}`}>
      <div
        className={`item-tile__total-cart-wrapper item-tile__total-cart-wrapper--${size}`}
      >
        <p className={`item-tile__total-price item-tile__total-price--${size}`}>
          {formattedTotalPrice}
        </p>
        <button
          className={`item-tile__cart-btn cart-btn cart-btn--${size}`}
          aria-label="Add to cart"
          ref={cartBtnRef}
          onClick={() =>
            dispatch(addToCart({ product: { ...product, count } }))
          }
          style={count > 0 ? { justifyContent: "space-between" } : {justifyContent: "center"}}
        >
          {count > 0 && (
            <span className={`cart-btn__count cart-btn__count--${size}`}>
              {count}
            </span>
          )}
          <ShoppingCart
            className={`cart-btn__cart-icon cart-btn__cart-icon--${size}`}
            style={count > 0 ? { marginRight: "12px" } : {}}
          />
        </button>
      </div>

      <img
        className={`item-tile__product-image item-tile__product-image--${size}`}
        alt={product_name}
        src={product_image}
        onClick={() => navigate(`/product/${id}`)}
      />

      <div
        className={`item-tile__counter-wrapper item-tile__counter-wrapper--${size}`}
      >
        <p className={`item-tile__item-name item-tile__item-name--${size}`}>
          {product_name}
        </p>
        <div
          className={`item-tile__btns-wrapper item-tile__btns-wrapper--${size}`}
        >
          <button
            className={`item-tile__decrease-btn decrease-btn decrease-btn--${size}`}
            aria-label="Decrease count"
            onClick={() => setCount(Math.max(count - 1, 0))}
          >
            <Remove
              className={`decrease-btn__decrease-icon decrease-btn__decrease-icon--${size}`}
            />
          </button>

          <button
            className={`item-tile__increase-btn increase-btn increase-btn--${size}`}
            aria-label="Increase count"
            onClick={() => setCount(count + 1)}
          >
            <Add
              className={`increase-btn__increase-icon increase-btn__increase-icon--${size}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemTile;
