import "./_ItemTile.scss";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../state/cartSlice";
import { ReactComponent as Add } from "../../assets/icons/increase_qty.svg";
import { ReactComponent as Remove } from "../../assets/icons/decrease_qty.svg";
import { ReactComponent as ShoppingCart } from "../../assets/icons/cart_small.svg";
import { ReactComponent as Airplane } from "../../assets/icons/plane.svg";

const ItemTile = ({ product, size }) => {
  const {
    product_price,
    product_name,
    product_image,
    id,
    product_online_stock,
    product_inshop_stock,
  } = product;

  const [purchaseType, setPurchaseType] = useState("");
  const [localCount, setLocalCount] = useState(0);

  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state?.cart?.items?.find((item) => item.id === id)
  );
  const count = cartItem ? cartItem.count : 0;
  const navigate = useNavigate();
  const cartBtnRef = useRef(null);

  useEffect(() => {
    if (product_inshop_stock > 0 && product_online_stock === 0) {
      setPurchaseType("inshop");
    } else if (product_inshop_stock === 0 && product_online_stock > 0) {
      setPurchaseType("online");
    }
  }, [product_inshop_stock, product_online_stock]);

  const handleIncrease = () => {
    if (purchaseType === "inshop" && localCount < product_inshop_stock) {
        setLocalCount(prevCount => prevCount + 1);
    } else if (purchaseType === "online" && localCount < product_online_stock) {
        setLocalCount(prevCount => prevCount + 1);
    }
  };

  const handleDecrease = () => {
    if (localCount > 0) {
        setLocalCount(prevCount => prevCount - 1);
    }
  };

  const disableIncreaseButton = 
    (purchaseType === "inshop" && localCount >= product_inshop_stock) ||
    (purchaseType === "online" && localCount >= product_online_stock);

    function updateCartBtnWidth() {
      const cartBtn = cartBtnRef.current;
  
      if (!cartBtn) {
        return;
      }
  
      cartBtn.classList.remove("width-mid", "width-max");
  
      if (localCount < 10 && localCount > 0) {
        cartBtn.classList.add("width-mid");
      } else if (localCount >= 10) {
        cartBtn.classList.add("width-max");
      }
  }
  
  useEffect(() => {
      updateCartBtnWidth();
  }, [localCount]);
  

  return (
    <div className={`item-tile item-tile--${size}`}>
      <div
        className={`item-tile__total-cart-wrapper item-tile__total-cart-wrapper--${size}`}
      >
        <p className={`item-tile__total-price item-tile__total-price--${size}`}>
          {localCount >= 1 ? formatPrice(count * product_price) : formatPrice(product_price)}
        </p>
        <button
          className={`item-tile__cart-btn cart-btn cart-btn--${size} ${
            product_inshop_stock === 0 && product_online_stock > 0
              ? "cart-btn--online"
              : ""
          }`}
          aria-label="Add to cart"
          ref={cartBtnRef}
          onClick={() =>
            dispatch(
              addToCart({ product: { ...product, count: localCount, purchaseType } })
            )
          }
          style={
            localCount > 0
              ? { justifyContent: "space-between" }
              : { justifyContent: "center" }
          }
        >
          {localCount > 0 && (
            <span className={`cart-btn__count cart-btn__count--${size}`}>
              {localCount}
            </span>
          )}
          {product_inshop_stock === 0 && product_online_stock > 0 ? (
            <Airplane
              className={`cart-btn__cart-icon cart-btn__cart-icon--${size}`}
              style={localCount > 0 ? { marginRight: "12px" } : {}}
            />
          ) : (
            <ShoppingCart
              className={`cart-btn__cart-icon cart-btn__cart-icon--${size}`}
              style={localCount > 0 ? { marginRight: "12px" } : {}}
            />
          )}
        </button>
      </div>

      <img
        className={`item-tile__product-image item-tile__product-image--${size}`}
        alt={product_name}
        src={product_image}
        onDoubleClick={() => navigate(`/item/${id}`)}
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
            onClick={handleDecrease}
          >
            <Remove
              className={`decrease-btn__decrease-icon decrease-btn__decrease-icon--${size}`}
            />
          </button>
          <button
            className={`item-tile__increase-btn increase-btn increase-btn--${size} ${
              disableIncreaseButton ? "increase-btn--max" : ""
            }`}
            aria-label="Increase count"
            onClick={handleIncrease}
            disabled={disableIncreaseButton}
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
